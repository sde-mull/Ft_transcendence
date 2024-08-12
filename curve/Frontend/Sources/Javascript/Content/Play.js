import { handleNavigation } from "../router.js";
import { attachEventListener } from '../Tools/CreateEventListeners.js';

const attachPlayGameListeners = () => {
    attachEventListener('Class', 'nav__link', 'click', handleNavigation);
}

export const loadContent = () => {
    const title = document.getElementById('tab_title');
    title.innerHTML = 'Ft_Transcendence | Play';

    const content = document.getElementsByClassName('Content')[0];
    content.innerHTML = '<div id=games> \
						    <nav class="menu"> \
						    	<a href="/Play/Curve" class="nav__link">Curve</a> \
						    	<a href="/Play/Pong" class="nav__link">Pong</a> \
						    </nav>\
                        </div>';

    attachPlayGameListeners();
};
