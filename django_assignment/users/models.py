from django.db import models

# Create your models here.

class Signup(models.Model):
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    Email = models.CharField(max_length=50)
    Username = models.CharField(max_length=50)
    CreatedAt = models.DateField()