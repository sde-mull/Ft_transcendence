export const loadContent = async () => {
    var result;
    let GameListHtml;

    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Curve';

    const content = document.getElementsByClassName('Content')[0];


    try {
        result = await FetchCall('/api/game-list/');
    }
    catch (error) {
        console.error('Error during fetch call:', error);
        content.innerHTML = '<h1>Error</h1><p>Unable to load game list.</p>';
    }

    console.log(result);

    GameListHtml = `<h1>Game List</h1>
                    <h1>Active Games</h1>
                    <p>length = ${result.length} </p>`

    if (result.length > 0) {
        GameListHtml += '<ul>';
        result.forEach(game => {
            GameListHtml += `<li><a href="/Play/Curve/${game.fields.name}">${game.fields.name}</a></li>`;
        });
        GameListHtml += '</ul>';
    } else {
        GameListHtml += '<p>No active games available.</p>';
    }

    GameListHtml += `<a href="/Play/Curve/Create_Game" class="create-room-btn">Create New Game</a>`

    content.innerHTML = GameListHtml;
}


export const FetchCall = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error('Error during fetch call:', error);
        return null;
    }
}


// {% extends 'base.html' %}

// {% block title %}Game List{% endblock %}

// {% block content %}

//     <h1>Active Games</h1>
//     {% if active_games %}
//         <ul class="room-list">
//             {% for game in active_games %}
//             <li class="room-item">
//                 {{ game.name }}
//                 <a href="{% url 'game_room' game.id %}" class="join-room-btn">Join Game</a>
//                 <a href="{% url 'delete_game' game.id %}" class="delete-room-btn">Delete Game</a>
//             </li>
//             {% endfor %}
//         </ul>
//     {% else %}
//         <p class="no-rooms">No active games available</p>
//     {% endif %}
//     <a href="{% url 'create_game' %}" class="create-room-btn">Create New Game</a>
// {% endblock %}