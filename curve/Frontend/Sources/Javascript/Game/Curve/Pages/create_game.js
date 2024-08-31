// {% extends 'base.html' %}

// {% block title %}Create Game{% endblock %}

// {% block content %}
//     <h1>Create New Game</h1>
//     <form method="post">
//         {% csrf_token %}
//         {{ form.as_p }}
//         <button type="submit">Create Game</button>
//     </form>
//     <a href="{% url 'game_list' %}">Back to Game List</a>
// {% endblock %}

export const loadContent = async () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Curve';

    const content = document.getElementsByClassName('Content')[0];

    content.innerHTML = `<h1>Create New Game</h1>
                         <div class="Credentials_container">
                                    <form id="GameCreationForm"> 
                                        <div class="Credentials"> 
                                            <label for="game_name"> Game Name </label> 
                                            <input type="text" id="game_name" name="game_name" required> 
                                        </div>
                                        <div class="Credentials"> 
                                            <label for="password"> Password</label> 
                                            <input type="password" id="password" name="password" required> 
                                        </div>
                                        <div class="Submit">
                                            <button type="submit" id="submitBtn" > Create </button>
                                        </div>
                                    </form>
                                </div>`;
    
    const GameCreation = document.getElementById('GameCreationForm');
    if (GameCreation) {
        GameCreation.addEventListener('submit', handleGameCreation);
    }
};

const handleGameCreation = async (event) => {
    event.preventDefault();

    const game_name = document.getElementById('game_name').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/create-game/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                game_name: game_name,
                password: password
            })
        });
    
        const data = await response.json();
        if (response.ok) {
            window.location.href = '/Play/Curve';
            console.log(data);
            console.log("Game Created Successfully");
        } else {
            document.getElementById('error-message').innerText = data.message;
        }
    } catch (error) {
        console.error('Error during sign up:', error);
    }
    
};