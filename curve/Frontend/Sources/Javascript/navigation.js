const navigation = document.getElementsByClassName('Navigation')[0];

navigation.innerHTML = '<header id="header"> \
            				<h2 class="Logo" href="/"> Ft_transcendence </h2> \
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
	
	if (header.style.display === 'none' || header.offsetHeight === 0) {
		// Store and restore original height of the header
		var originalHeight = header.getAttribute('data-original-height') || '80px'; // Default to initial height
		
		header.style.height = originalHeight; // Restore original height
		 // Show the header
		button.style.top = '60px'; // Move button to original position
		button.innerHTML = '&#9650;'; // Up arrow
		setTimeout(function() {
			header.style.display = 'flex'; // Hide the header after animation
		}, 250);
	} else {
		// Store original height before hiding
		header.setAttribute('data-original-height', header.offsetHeight + 'px');
		
		header.style.height = '0px'; // Reduce header height to 0
		button.style.top = '0px'; // Move button up (if needed)
		button.innerHTML = '&#9660;'; // Down arrow
		
		// After the transition is complete, hide the header
		setTimeout(function() {
			header.style.display = 'none'; // Hide the header after animation
		}, 250); // Adjust timing to match CSS transition duration
	}
}
						
											
						
