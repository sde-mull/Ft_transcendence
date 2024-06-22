export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Sign Up';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<h1>Sign Up Page</h1><p>Create an account to proceed.</p>';
};
