export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Log In';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>Login Page</h1><p>Please log in to continue.</p>';
};
