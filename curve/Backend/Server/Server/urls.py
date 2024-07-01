
from django.contrib import admin
from django.urls import path
from Authentication import views

urlpatterns = [
    path('admin/', admin.site.urls),
	path('api/login/', views.login_view, name='login'),
]

