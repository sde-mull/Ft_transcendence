from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Game, Player
from django.http import JsonResponse
import json
from django.contrib.auth.decorators import login_required
from django.core import serializers
from django.http import HttpResponse
from .forms import ChatRoomForm, GameForm

def login_view(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            username = body.get('username')
            password = body.get('password')

            user = authenticate(request, username=username, password=password)
            
            if user is not None:
                login(request, user)
                return JsonResponse({'authenticated': True}, status=200)
            else:
                return JsonResponse({'authenticated': False, 'error': 'Invalid credentials'}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def signup_view(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            username = body.get('username')
            password = body.get('password')
            email = body.get('email')
            
            if not username or not password or not email:
                return JsonResponse({'error': 'Missing fields'}, status=400)
            
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Username already taken'}, status=400)

            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()

            return JsonResponse({'username': username, 'email': email}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


def auth_status_view(request):
        return JsonResponse({'authenticated': request.user.is_authenticated})


def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'authenticated': False, 'message': 'Logged out successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
# @login_required
# def chat_room_list(request):
#     rooms = ChatRoom.objects.all()
#     return render(request, 'chat_room_list.html', {'rooms': rooms})

# @login_required
# def chat_room(request, room_id):
#     room = ChatRoom.objects.get(id=room_id)
#     messages = room.messages.all()

#     if request.method == 'POST':
#         content = request.POST.get('content')
#         if content:
#             Message.objects.create(room=room, sender=request.user, content=content)
#         return redirect('chat_room', room_id=room.id)

#     return render(request, 'chat_room.html', {'room': room, 'messages': messages})

# @login_required
# def create_chat_room(request):
#     if request.method == 'POST':
#         form = ChatRoomForm(request.POST)
#         if form.is_valid():
#             room = form.save(commit=False)
#             room.created_by = request.user
#             room.save()
#             return redirect('chat_room_list')
#     else:
#         form = ChatRoomForm()
#     return render(request, 'create_chat_room.html', {'form': form})

def game_list(request):
    active_games = Game.objects.filter(is_active=True).order_by('-created_at')
    serialized_data = serializers.serialize('json', active_games)
    return HttpResponse(serialized_data, content_type='application/json')

# @login_required
# def delete_chat_room(request, room_id):
#     chat_room = get_object_or_404(ChatRoom, id=room_id)
#     chat_room.delete()
#     return redirect('chat_room_list')


@login_required
def create_game(request):

    body = json.loads(request.body)
    game_name = body.get('game_name')
    password = body.get('password')
    # if request.method == 'POST':
    #     form = GameForm(request.POST)
    #     if form.is_valid():
    #         game = form.save()
    #         player, created = Player.objects.get_or_create(user=request.user)
    #         player.game = game
    #         player.save()
    #         return redirect('game_list')
    # else:
    #     form = GameForm()
    game = Game(name=game_name)
    game.save()
    return JsonResponse({'game_name': game_name, 'password': password}, status=201)

@login_required
def game_room(request, game_id):
    game = get_object_or_404(Game, id=game_id)

    with transaction.atomic():
        player, created = Player.objects.get_or_create(user=request.user)

        if player.game != game:
            if player.game:
                player.leave_game()
            player.join_game(game)

    players = game.players.all()

    context = {
        'game': game,
        'player': player,
        'players': players,
    }

    return render(request, 'game_room.html', context)

# @login_required
# def game_play(request, game_id):
#     game = get_object_or_404(Game, id=game_id)
#     players = game.players.all()

#     with transaction.atomic():
#         player, created = Player.objects.get_or_create(user=request.user)

#     context = {
#         'game': game,
#         'player': player,
#         'players': players,
#     }
#     return render(request, 'game_play.html', context)


# @login_required
# def leave_game(request, game_id):
#     player = Player.objects.get(user=request.user)
#     if player.game and player.game.id == game_id:
#         player.game = None
#         player.save()
#     return redirect('game_list')

# @login_required
# def delete_game(request, game_id):
#     game = get_object_or_404(Game, id=game_id)
#     game.delete()
#     return redirect('game_list')

