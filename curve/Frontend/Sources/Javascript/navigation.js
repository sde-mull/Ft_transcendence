const navigation = document.getElementsByClassName('Navigation')[0];

navigation.innerHTML = '<header id="header"> \
            				<h2 class="Logo" href="/"> Transcendence </h2> \
							<nav class="menu"> \
								<a href="/" class="nav__link">Home</a> \
								<a href="/About" class="nav__link">About</a> \
								<a href="/LogIn" class="nav__link" id="Login">Log In</a> \
								<a href="/SignUp" class="nav__link" id="Signup">Sign Up</a> \
							</nav> \
						</header> \
						<button id="toggleHeader" onclick="toggleHeader()">&#9650;</button>';


function toggleHeader() {
	var header = document.getElementById('header');
	var button = document.getElementById('toggleHeader');
	
	if (header.style.display === 'none') {
		
		header.style.display = 'flex';
		header.style.height = '80px';
		button.style.top = '55px';
		button.innerHTML = '&#9650;';
	} else {
		
		header.style.height = '0px';
		button.style.top = '-4px';
		button.innerHTML = '&#9660;';
		
		setTimeout(function() {
			header.style.display = 'none';
		}, 200);
	}
}
						
											
						
