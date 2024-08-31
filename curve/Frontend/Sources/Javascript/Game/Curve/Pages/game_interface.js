// {% load static %}

// <div id="game-interface">
//     <div style="display: flex; justify-content: center; align-items: center;">
//         <h2>Curvealho</h2>
//     </div>
    
//     <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 25px;">
//         <button onclick="ft_start()" style="background-color: green; margin-right: 10px; width: 50px; height: 50px;">Start</button>
//         <button onclick="ft_pause()" style="background-color: blue; margin-right: 10px; width: 50px; height: 50px;">Pause</button>
//         <button onclick="ft_stop()" style="background-color: red; width: 50px; height: 50px;">Stop</button>
//     </div>
    
//     <div id="big_container" style="display: flex;">
//         <div id ="space" style="margin-right: 250px;"></div>
//         <div id="menu_container" style="width: 200px; padding: 0; margin: 0;">
//             <ul id="playerList">
//                 <div style="display: flex;">
//                     <p id="round" style="justify-content: left; flex-grow: 1;">Round 1</p>
//                     <p id="playersPlay" style="justify-content: left; flex-grow: 1;"></p>
//                 </div>
//                 {% for player in players %}
//                     {{ player.user.username }}
//                     <br>
//                 {% endfor %}
//             </ul>
//         </div>
    
//         <div id="canvas_container" style="margin-left: 100px;">
//             <canvas id="curve" width="755" height="755"></canvas>
//         </div>
//     </div>

//     <script src="{% static 'myapp/js/player.js' %}"></script>
//     <script src="{% static 'myapp/js/powerup.js' %}"></script>
//     <script src="{% static 'myapp/js/history.js' %}"></script>
//     <script src="{% static 'myapp/js/script.js' %}"></script>
//     <script src="{% static 'myapp/js/game.js' %}"></script>
//     <script src="{% static 'myapp/js/player_utils.js' %}"></script>
//     <script src="{% static 'myapp/js/player_paint.js' %}"></script>
//     <script src="{% static 'myapp/js/player_power.js' %}"></script>
//     <script src="{% static 'myapp/js/player_iteration.js' %}"></script>
//     <script src="{% static 'myapp/js/utils.js' %}"></script>
//     <script src="{% static 'myapp/js/round.js' %}"></script>
//     <script src="{% static 'myapp/js/keys.js' %}"></script>
//     <script src="{% static 'myapp/js/paint.js' %}"></script>
// </div>