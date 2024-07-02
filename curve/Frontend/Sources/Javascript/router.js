const pathToModuleMap = {
    '/': './Content/Home.js',
    '/About': './Content/About.js',
    '/LogIn': './Content/LogIn.js',
    '/SignUp': './Content/SignUp.js',
    '/Settings': './Content/Settings.js'
};

const updateContent = async (path) => {
    try {
        console.log(path);
        const modulePath = pathToModuleMap[path] || './Content/404.js';
        const module = await import(modulePath);
        module.loadContent();
    } catch (error) {
        console.error("Error loading content:", error);
        const content = document.getElementsByClassName('Content')[0];
        content.innerHTML = '<h1>Error</h1><p>There was an error loading the content.</p>';
    }
};

const handleNavigation = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    history.pushState({}, '', path);
    updateContent(path);
};

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

document.querySelectorAll('.Logo').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

window.addEventListener('popstate', () => {
    updateContent(window.location.pathname);
});

updateContent(window.location.pathname);
