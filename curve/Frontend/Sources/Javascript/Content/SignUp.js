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
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    try {
        const response = await fetch('/api/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password1
            })
        });
    
        const data = await response.json();
        if (response.ok) {
            window.location.href = '/LogIn';
        } else {
            document.getElementById('error-message').innerText = data.message;
        }
    } catch (error) {
        console.error('Error during sign up:', error);
    }
    
};

//To write the html page
function WritePage() {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Sign Up';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = `<div class="Login fade-in">
                            <div class="Login_box"> 
                                <div id="LoginTitleContainer">
                                    <h1 id="Login_Title" > Register to Transcendence </h1> 
                                </div>
                                <div class="Credentials_container">
                                    <form id="Loginform"> 
                                        <div class="Credentials"> 
                                            <label for="username"> Username </label> 
                                            <input type="text" id="username" name="username" required> 
                                        </div>
                                        <div class="Credentials"> 
                                            <label for="email"> Email </label> 
                                            <input type="text" id="email" name="email" required> 
                                        </div>
                                        <div class="Credentials"> 
                                            <label for="password1"> Password</label> 
                                            <input type="password" id="password1" name="password1" required> 
                                        </div>
                                        <div class="Credentials"> 
                                            <label for="password2"> Confirm Password</label> 
                                            <input type="password" id="password2" name="password2" required> 
                                        </div>
                                        <div class="Submit">
                                            <button type="submit" id="submitBtn" > Register </button>
                                        </div>
                                    </form>
                                </div>
                                <p id="error-message"></p>
                            </div> 
                        </div>`;
};