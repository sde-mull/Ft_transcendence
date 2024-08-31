
export const HandleGameRoom = async (event, result) => {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    history.pushState({}, '', path);
    parse(result,  window.location.href);

    LoadGameRoom();
};


export const LoadGameRoom = async () => {

    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Curve';

    const content = document.getElementsByClassName('Content')[0];

    content.innerHTML = `<h1> GameRoom </h1>`
    parse(result,  window.location.href);
};

function parse(result, href)
{
    console.log(result);
    console.log(href);
}



// {% extends 'base.html' %}

// {% block title %}GameRoom: {{ game.name }}{% endblock %}

// {% block content %}
// <h1>Game Room: {{ game.name }}</h1>
// <h2>Welcome, <span id="username">{{ player.user.username }}</span> [{{ player.id }}]!</h2>
// <h2>Players:</h2>
// <h3>Number: <span id="number-of-players"></span></h3>
// <ul id="players-list"></ul>
// <a class="start-game-btn" onclick="sendMessage('start_game')">Start Game</a>
// <a href="{% url 'leave_game' game.id %}" class="delete-room-btn">Leave Game</a>
// <a href="{% url 'game_play' game.id %}" type="hidden" id="start-game-hidden" style="display: none;">

// {{ game.id|json_script:"game-id" }}

// {% endblock %}

// {% block extra_js %}

// <script>
//     const gameId = JSON.parse(document.getElementById('game-id').textContent);
//     const playersList = document.getElementById('players-list');
//     const numberPlayers = document.getElementById('number-of-players');
//     const gameSocket = new WebSocket(`ws://${window.location.host}/ws/game/${gameId}/`);
//     var players = new Set();
//     gameSocket.onopen = function(e) {
//         sendMessage('player_join');
//     }
//     gameSocket.onerror = function(error) {
//     }
//     gameSocket.onclose = function(e) {
//     }
//     gameSocket.onmessage = function(e) {
//         const data = JSON.parse(e.data)
//         const type = data.type
//         if (data.type === 'player_join')
//         {
//             const username = data.username
//             addPlayer(username)
//         }
//         if (data.type === 'player_leave')
//         {
//             const username = data.username
//             removePlayer(username)
//         }
//         if (data.type === 'me_join')
//         {
//             data.players.forEach(player => addPlayer(player.username));
//         }
//         if (data.type == 'start_game')
//         {
//             startGame();
//         }   
//     }
//     function addPlayer(username)
//     {
//         players.add(username)
//         const playerElement = document.createElement('li');
//         playerElement.textContent = username;
//         playersList.appendChild(playerElement);
//         numberPlayers.textContent = players.size;
//     }
//     function removePlayer(username)
//     {
//         players.delete(username)
//         const playerElement = Array.from(playersList.children).find(li => li.textContent === username)
//         if (playerElement)
//             playersList.removeChild(playerElement)
//         numberPlayers.textContent = players.size;
//     }
//     function sendMessage(type)
//     {
//         gameSocket.send(JSON.stringify({type: type}))
//     }
//     function startGame()
//     {
//         document.getElementById('start-game-hidden').click();
//     }
// </script>
// {% endblock %}