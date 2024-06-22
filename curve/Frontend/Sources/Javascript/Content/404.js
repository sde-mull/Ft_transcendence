export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | 404 Error';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>404 Not Found</h1><p>Sorry, the page you requested does not exist.</p>';
};
