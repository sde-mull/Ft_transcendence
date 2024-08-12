export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Profile';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>This is your profile</h1>';
};
