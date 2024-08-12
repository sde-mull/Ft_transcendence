export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Pong';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>This is the Pong Game</h1>';
};
