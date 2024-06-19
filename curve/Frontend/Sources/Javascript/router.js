const updateContent = (path) => {
    const content = document.getElementById('Content');
    switch (path) {
        case '/':
            Content.innerHTML = '<h1>Home Page</h1><p>Welcome to the home page!</p>';
            break;
        case '/About':
            Content.innerHTML = '<h1>About Page</h1><p>Learn more about us.</p>';
            break;
        case '/LogIn':
            Content.innerHTML = '<h1>Login Page</h1><p>Please log in to continue.</p>';
            break;
        case '/SignIn':
            Content.innerHTML = '<h1>Sign In Page</h1><p>Create an account to proceed.</p>';
            break;
        case '/Settings':
            Content.innerHTML = '<h1>Settings Page</h1><p>Manage your account settings.</p>';
            break;
        default:
            Content.innerHTML = '<h1>404 Not Found</h1><p>Sorry, the page you requested does not exist.</p>';
            break;
    }
};

const handleNavigation = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    history.pushState({}, '', path);
    updateContent(path);
};

document.querySelectorAll('.nav').forEach(link => {
    link.addEventListener('click', handleNavigation);
});


window.addEventListener('popstate', () => {
    updateContent(window.location.pathname);
});

updateContent(window.location.pathname);
