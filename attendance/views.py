import cv2
import numpy as np
from deepface import DeepFace
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Student, Attendance
import os

@csrf_exempt
def mark_attendance(request):
    """
    Uses facial recognition to mark attendance.
    """
    try:

        cam = cv2.VideoCapture(0)

        ret, frame = cam.read()
        if not ret:
            return JsonResponse({"error": "Failed to capture image"}, status=500)

        cam.release()

        temp_image_path = "temp.jpg"
        cv2.imwrite(temp_image_path, frame)

        students = Student.objects.all()
        for student in students:
            stored_image_path = student.photo.path
            result = DeepFace.verify(img1_path=temp_image_path, img2_path=stored_image_path)

            if result["verified"]:
                Attendance.objects.create(student=student)
                os.remove(temp_image_path)  # Clean up
                return JsonResponse({"message": f"Attendance marked for {student.name}"})

        os.remove(temp_image_path)  # Clean up if no match found
        return JsonResponse({"error": "Face not recognized"}, status=400)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
