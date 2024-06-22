export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Home';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>Home Page</h1><p>Welcome to the home page!</p>';
};
