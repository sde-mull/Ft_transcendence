//Executes this code when we get the Login Path
export const loadContent = () => {
    WritePage();

    setTimeout(() => {
        const loginDiv = document.querySelector('.Login');
        loginDiv.classList.add('visible');
    }, 100);

    const loginForm = document.getElementById('Loginform');
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmission);
    }
};

//To handle the information we get from the user submission
const handleFormSubmission = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:4444/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Login successful:', data);
        } else {
            console.log('Login failed:', data);
            document.getElementById('error-message').innerText = data.message;
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

//To write the html page
function WritePage() {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Log In';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = `<div class="Login fade-in">
                            <div class="Login_box"> 
                                <div id="LoginTitleContainer">
                                    <h1 id="Login_Title" > Log In to Transcendence </h1> 
                                </div>
                                <div class="Credentials_container">
                                    <form id="Loginform"> 
                                        <div class="Credentials"> 
                                            <label for="username">Username</label> 
                                            <input type="text" id="username" name="username" required> 
                                        </div>
                                        <div class="Credentials"> 
                                            <label for="password">password</label> 
                                            <input type="password" id="password" name="password" required> 
                                        </div>
                                        <div class="Submit">
                                            <button type="submit" id="submitBtn" > Log In </button>
                                        </div>
                                    </form>
                                </div>
                                <p id="error-message"></p>
                            </div> 
                        </div>`;
};