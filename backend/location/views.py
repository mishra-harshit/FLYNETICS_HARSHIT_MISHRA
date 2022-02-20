from django.shortcuts import render
from django.http import JsonResponse
from . import models
# Create your views here.
def get_location(request):
    if request.method == 'GET':
        location = request.GET.get('location')
        data = models.Locations.objects.get(name=location)
        response = JsonResponse({"name":data.name,"lattitude":data.lattitude,"longitude":data.longitude,"description":data.description})
        return response