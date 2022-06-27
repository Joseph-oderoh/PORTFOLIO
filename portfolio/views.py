from django.shortcuts import render
from .models import Project

# Create your views here.
def homepage(request):
    project=Project.objects.all()
    return render(request, 'index.html')