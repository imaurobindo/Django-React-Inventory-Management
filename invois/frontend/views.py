from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

# def login(request):
#     return render(request, 'frontend/src/components/Login.js')

@ensure_csrf_cookie
def index2(request):
    print(request.user)
    if request.user.is_anonymous:
        return redirect("/login")
        print( "1st BLOCK EXEXUTED")
    return render(request, '/dashboard')
    print( "2nd BLOCK EXEXUTED")



@ensure_csrf_cookie
def loginUser(request):
    if request.method=="POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print( "3rd BLOCK EXEXUTED")

        # check if user has valid credentials
        user = authenticate(request, username=username, password=password )

        if user is not None:
        # A backend authenticated the credentials
            login(request, user)
            return redirect("/dashboard")
            print( "4th BLOCK EXEXUTED")
    
        else:
            # No backend authenticated the credentials
            return render(request, '/loginauth')
            print( "5th BLOCK EXEXUTED")

    return render(request, '/login')
    print( "6th BLOCK EXEXUTED")

@ensure_csrf_cookie
def SignupUser(request):
    if request.method=="POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        my_user=User.objects.create_user(username,email,password1)
        my_user.save()
        return redirect('login')
        print(username, password1)

@ensure_csrf_cookie
def logoutUser(request):
    logout(request)
    return redirect(request, "/login")
    print( "7th BLOCK EXEXUTED")