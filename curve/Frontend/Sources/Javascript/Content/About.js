export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | About';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>About Page</h1><p>Learn more about us.</p>';
};
