from django.contrib import admin
from .models import Student, Grade

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("name", "roll_number")

@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    list_display = ("student", "subject", "previous_score", "attendance", "assignment_score", "predicted_score")
