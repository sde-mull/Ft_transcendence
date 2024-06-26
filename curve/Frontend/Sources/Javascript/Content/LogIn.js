export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Log In';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = `<div class="Login">
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
                                            <button type="submit"> Log In </button>
                                        </div>
                                    </form>
                                </div>
                                <p id="error-message"></p>
                            </div> 
                        </div>`;
};
