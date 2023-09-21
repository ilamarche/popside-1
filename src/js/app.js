import handleLoad from './module/load';
import handleMenu from './module/menu';
import handleLogo from './module/logo';
import handleSvgs from './module/svgs';
import handleTags from './module/tags';

window.addEventListener('DOMContentLoaded', () => {
    handleLoad();
    handleMenu();
    handleLogo();
    handleSvgs();
    handleTags();
});
