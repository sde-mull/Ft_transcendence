from django.http import JsonResponse
from django.contrib.auth import authenticate

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        return JsonResponse({'username': username, 'password': password}, status=200)
