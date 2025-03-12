import numpy as np
import pandas as pd
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from sklearn.linear_model import LinearRegression
from grade_prediction.models import Student, Grade

from sklearn.preprocessing import MinMaxScaler

def train_model():
    """
    Train ML model using past student performance.
    """
    grades = Grade.objects.all()

    if not grades.exists():
        print("No data available for training.")
        return None

    # Prepare training data
    data = []
    for grade in grades:
        if grade.previous_score is not None and grade.attendance is not None and grade.assignment_score is not None:
            data.append([grade.previous_score, grade.attendance, grade.assignment_score, grade.predicted_score or 0])

    if not data:
        print("Insufficient data for training.")
        return None

    df = pd.DataFrame(data, columns=["previous_score", "attendance", "assignment_score", "predicted_score"])
    df.dropna(inplace=True)

    if df.empty:
        print("Training data is empty after cleaning.")
        return None

    X = df[["previous_score", "attendance", "assignment_score"]]
    y = df["predicted_score"]

    if X.shape[0] == 0:
        print("No valid training samples found.")
        return None

    # **Normalize the data**
    scaler = MinMaxScaler()
    X_scaled = scaler.fit_transform(X)

    model = LinearRegression()
    model.fit(X_scaled, y)

    return model, scaler



@csrf_exempt
def predict_grade(request, student_id):
    """
    Predicts future grades for a student.
    """
    try:
        student = Student.objects.get(id=student_id)
        grades = Grade.objects.filter(student=student)

        model, scaler = train_model()
        if not model:
            return JsonResponse({"error": "Not enough data for prediction"}, status=400)

        predictions = {}
        for grade in grades:
            X_test = np.array([[grade.previous_score, grade.attendance, grade.assignment_score]])
            
            if X_test.shape[0] == 0:
                continue  # Skip if no valid data

            X_test_scaled = scaler.transform(X_test)  # Apply the same scaling
            predicted_score = model.predict(X_test_scaled)[0]

            grade.predicted_score = predicted_score
            grade.save()
            predictions[grade.subject] = round(predicted_score, 2)

        if not predictions:
            return JsonResponse({"error": "No valid predictions available"}, status=400)

        return JsonResponse({"student": student.name, "predicted_grades": predictions})

    except Student.DoesNotExist:
        return JsonResponse({"error": "Student not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
