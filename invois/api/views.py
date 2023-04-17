from django.shortcuts import render, redirect
from rest_framework import generics
from django.contrib.auth.models import User
from .models import NormalUsers
from .serializers import UsersSerializer, AuthUserSerializer
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response


# Create your views here.

class UsersView(generics.ListCreateAPIView):
    queryset = NormalUsers.objects.all()
    serializer_class = UsersSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

   

class AuthUserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = AuthUserSerializer
    #permission_classes = [IsAuthenticated]
    

# @ensure_csrf_cookie
# def index2(request):
#     print(request.user)
#     if request.user.is_anonymous:
#         return redirect("/login")
#     return render(request, 'index2.html')



# @ensure_csrf_cookie
# def loginUser(request):
#     if request.method=="POST":
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         print(username, password)

#         # check if user has valid credentials
#         user = authenticate(request, username=username, password=password )

#         if user is not None:
#         # A backend authenticated the credentials
#             login(request, user)
#             return redirect("/index2")
    
#         else:
#             # No backend authenticated the credentials
#             return render(request, 'loginb.html')

#     return render(request, 'loginb.html')

# @ensure_csrf_cookie
# def logoutUser(request):
#     logout(request)
#     return redirect("/loginb")

