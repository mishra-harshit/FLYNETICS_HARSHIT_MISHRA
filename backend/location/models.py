from django.db import models

# Create your models here.
class Locations(models.Model):
    name = models.CharField(max_length=100)
    lattitude = models.FloatField()
    longitude = models.FloatField()
    description= models.CharField(max_length=500, default="")
    