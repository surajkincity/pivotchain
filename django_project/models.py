from django.db import models
from django.forms import ModelForm
import datetime


class contact(models.Model):
    email = models.CharField(max_length=5000)
    name = models.CharField(max_length=5000)
    message = models.TextField()

class career(models.Model):
    name = models.CharField(max_length=5000)
    email = models.CharField(max_length=5000)
    resume = models.FileField()


class newsletter(models.Model):
    email = models.CharField(max_length=5000)


