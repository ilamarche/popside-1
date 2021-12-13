import handleLoad from './module/load';
import handleMenu from './module/menu';
import handleSvgs from './module/svgs';
import handleShapes from './module/shapes';

window.addEventListener('DOMContentLoaded', () => {
    handleLoad();
    handleMenu();
    handleSvgs();
    handleShapes();
});
