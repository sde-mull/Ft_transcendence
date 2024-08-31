// {% extends 'base.html' %}
// {% load static %}

// {% block title %}Curve{% endblock %}

// {% block content %}
//     <h1>CURVE!!!</h1>
//     <h2>Welcome, {{ player.user.username }} [{{ player.id }}]!</h2>
//     <h2>Players:</h2>
//     <h3 id="numberPlayers">Number: {{ game.number_of_players }}</h3>
//     <ul id="playerList">
//         {% for player in players %}
//             <li data-player-id="{{ player.id }}" data-username="{{ player.user.username }}">
//                 {{ player.user.username }} [{{ player.id }}] - {{ player.points }}
//             </li>
//         {% endfor %}
//     </ul>
//     <h3 id="round"></h3>
//     <a href="{% url 'leave_game' game.id %}" class="delete-room-btn">Leave Game</a>
//     <div id="canvas_container">
//         <canvas id="curve" width="755" height="755"></canvas>
//     </div>

//     {{ game.id|json_script:"game-id" }}
    
//     <script src="{% static 'myapp/js/game.js' %}"></script>
//     <script src="{% static 'myapp/js/player.js' %}"></script>
//     <script src="{% static 'myapp/js/powerup.js' %}"></script>
//     <script src="{% static 'myapp/js/history.js' %}"></script>
//     <script src="{% static 'myapp/js/script.js' %}"></script>
    
//     <script src="{% static 'myapp/js/player_utils.js' %}"></script>
//     <script src="{% static 'myapp/js/player_paint.js' %}"></script>
//     <script src="{% static 'myapp/js/player_power.js' %}"></script>
//     <script src="{% static 'myapp/js/player_iteration.js' %}"></script>
//     <script src="{% static 'myapp/js/utils.js' %}"></script>
//     <script src="{% static 'myapp/js/round.js' %}"></script>
//     <script src="{% static 'myapp/js/keys.js' %}"></script>
//     <script src="{% static 'myapp/js/paint.js' %}"></script>
//     <script src="{% static 'myapp/js/game_play.js' %}"></script>

//     <script>
//         var roundElem = document.getElementById('round');
//         roundElem.textContent = `Round: ${game.round}`;
//         var numberPlayers = "{{ game.number_of_players }}";
//         var playerElements = document.querySelectorAll('#playerList li');
//         var playerId = "{{ player.id }}"

//         const gameId = JSON.parse(document.getElementById('game-id').textContent);
//         const gameSocket = new WebSocket(`ws://${window.location.host}/ws/game/${gameId}/play/`);

//         gameSocket.onopen = function(e) {
//             ft_start();
//         }

//         gameSocket.onmessage = function(e) 
//         {
//             const data = JSON.parse(e.data)
//             const type = data.type
//             console.log(type)
//             if (type == 'player')
//                 game.players[data.player.id - 1].setPlainObject(data.player);
//             if (type == 'round')
//             {
//                 var roundElem = document.getElementById('round');
//                 roundElem.textContent = `Round: ${game.round}`;
//             }
//             if (type == 'collision')
//                 game.players[data.player.id - 1].processCollision();
//         }

//         function sendGameAction(action) 
//         {
//             if (gameSocket && gameSocket.readyState === WebSocket.OPEN)
//                 gameSocket.send(JSON.stringify(action));
//         }
//     </script>
// {% endblock %}