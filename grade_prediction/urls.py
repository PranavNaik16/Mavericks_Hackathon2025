from django.urls import path
from .views import predict_grade

urlpatterns = [
    path("predict/<int:student_id>/", predict_grade, name="predict_grade"),
]
