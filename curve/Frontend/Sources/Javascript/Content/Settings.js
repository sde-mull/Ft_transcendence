export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Settings';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>Settings Page</h1><p>Manage your account settings.</p>';
};
