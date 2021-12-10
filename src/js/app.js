import handleHeader from './module/header';
import handleMenu from './module/menu';
import handleCatchphrase from './module/catchphrase';
import handleSvgs from './module/svgs';

window.addEventListener('DOMContentLoaded', () => {
    handleHeader();
    handleMenu();
    handleCatchphrase();
    handleSvgs();
});
