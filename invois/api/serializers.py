from rest_framework import serializers
from .models import NormalUsers
from django.db import models
from django.contrib.auth.models import User

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = NormalUsers
        fields = ('id', 'first_name', 'last_name', 'username', 'password', 'created_at', 'handle')


class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
