from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_number = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    previous_score = models.FloatField()
    attendance = models.FloatField()
    assignment_score = models.FloatField()
    predicted_score = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.student.name} - {self.subject}"
