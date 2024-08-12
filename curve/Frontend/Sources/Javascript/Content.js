const pathToModuleMap = {
    '/': './Content/Home.js',
    '/About': './Content/About.js',
    '/LogIn': './Content/LogIn.js',
    '/SignUp': './Content/SignUp.js',
    '/Settings': './Content/Settings.js',
    '/Play': './Content/Play.js',
    '/Profile': './Content/Profile.js',
    '/Play/Curve': './Game/Curve/main.js',
    '/Play/Pong': './Game/Pong/main.js',
};


export const updateContent = async (path) => {
    try {
        const modulePath = pathToModuleMap[path] || './Content/404.js';
        const module = await import(modulePath);
        module.loadContent();
    } catch (error) {
        console.error("Error loading content:", error);
        const content = document.querySelector('.Content');
        if (content) {
            content.innerHTML = '<h1>Error</h1><p>There was an error loading the content.</p>';
        }
    }
};