export const pathToModuleMap = {
    '/': './Content/Home.js',
    '/About': './Content/About.js',
    '/LogIn': './Content/LogIn.js',
    '/SignUp': './Content/SignUp.js',
    '/Settings': './Content/Settings.js',
    '/Play': './Content/Play.js',
    '/Profile': './Content/Profile.js',
    '/Play/Curve': './Game/Curve/Pages/game_list.js',
    '/Play/Pong': './Game/Pong/main.js',
    '/Play/Curve/Create_Game': './Game/Curve/Pages/create_game.js',
};

export const updatePathToModuleMap = (path, modulePath) => {
    pathToModuleMap[path] = modulePath;
    localStorage.setItem('pathToModuleMap', JSON.stringify(pathToModuleMap));
};


export const updateContent = async (path) => {
    try {
        const savedMap = localStorage.getItem('pathToModuleMap');
        if (savedMap) {
            Object.assign(pathToModuleMap, JSON.parse(savedMap));
        }
        console.log(pathToModuleMap);
        const modulePath = pathToModuleMap[path] || './Content/404.js';
        const module = await import(modulePath);

        // if (module.LoadGameRoom.name && module.LoadGameRoom.name == "LoadGameRoom"){
        //     module.LoadGameRoom();
        // } else {
        module.loadContent();
        // }
    } catch (error) {
        console.error("Error loading content:", error);
        const content = document.querySelector('.Content');
        if (content) {
            content.innerHTML = '<h1>Error</h1><p>There was an error loading the content.</p>';
        }
    }
};