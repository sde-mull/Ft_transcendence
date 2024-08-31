
from django.contrib import admin
from django.urls import path
from Authentication import views

urlpatterns = [
    path('admin/', admin.site.urls),
	path('login/', views.login_view, name='login'),
	path('signup/', views.signup_view, name='signup'),
	path('auth-status/', views.auth_status_view, name='auth_status'),
	path('logout/', views.logout_view, name='Logout'),
	path('game-list/', views.game_list, name='game-list'),
	path('create-game/', views.create_game, name='create-game'),
]
