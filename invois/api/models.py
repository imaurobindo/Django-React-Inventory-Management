from django.db import models


def generate_unique_handle():
    length = 8

    while True:
        handle = ''.join(random.choices(string.ascii_uppercase + string.digits + string.ascii_lowercase, k=length))
        if NormalUsers.objects.filter(handle=handle).count() == 0:
            break

    return handle

# Create your models here.
class NormalUsers(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    handle = models.CharField(max_length=8, unique=True)