import { Check_Authentication } from "./Tools/Authentication_utils.js"

export async function updateNavigation() {

	const navigation = document.getElementsByClassName('Navigation')[0];
	if ( await Check_Authentication()){
		navigation.innerHTML = '<header id="header"> \
        				<h2 class="Logo" href="/"> Transcendence </h2> \
						<nav class="menu"> \
							<a href="/" class="nav__link">Home</a> \
							<a href="/Play" class="nav__link">Play</a> \
							<a href="/Profile" class="nav__link">Profile</a> \
							<a id="Logout">Log Out</a> \
						</nav> \
					</header>';
	} else{
		navigation.innerHTML = '<header id="header"> \
        				<h2 class="Logo" href="/"> Transcendence </h2> \
						<nav class="menu"> \
							<a href="/" class="nav__link">Home</a> \
							<a href="/About" class="nav__link">About</a> \
							<a href="/LogIn" class="nav__link" id="Login">Log In</a> \
							<a href="/SignUp" class="nav__link" id="Signup">Sign Up</a> \
						</nav> \
					</header>';
	}
}	

