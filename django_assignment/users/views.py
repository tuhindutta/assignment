from django.shortcuts import render
from users.models import Signup
from datetime import datetime

# Create your views here.

def index(request):
    return render(request, "index.html")

def signup(request):
    if request.method == "POST":
        Firstname = request.POST.get("firstname")
        Lastname = request.POST.get("lastname")
        Email = request.POST.get("email")
        Username = request.POST.get("username")
        SignUp = Signup(FirstName=Firstname, LastName=Lastname, Email=Email, Username=Username, CreatedAt=datetime.today())
        SignUp.save()

    return render(request, "signup.html")