import { updateNavigation } from './navigation.js';
import { updateContent } from './Content.js';
import { LogoutProc } from './Tools/Logout.js';
import { attachEventListener } from './Tools/CreateEventListeners.js';

export const handleNavigation = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    if (path) {
        history.pushState({}, '', path);
        updateContent(path);
    }
};

const attachNavigationListeners = () => {
        attachEventListener('Class', 'nav__link', 'click', handleNavigation);
        attachEventListener('Query', '.Logo', 'click', handleNavigation);
        attachEventListener('Id', 'Logout', 'click', LogoutProc);
};

window.addEventListener('popstate', () => {
    updateContent(window.location.pathname);
});

export const initializePage = async (path = "/") => {
    await updateNavigation();
    updateContent(path);
    attachNavigationListeners();
    history.pushState({}, '', path);
};


document.addEventListener('DOMContentLoaded', () => {
    initializePage(window.location.pathname);
});
