import {BtnsPage} from './modules/BtnsPage.js';
import {dogAPImage} from './modules/dogAPImage.js';
import {svgDog} from './modules/svgDog.js';


function load() {
	dogAPImage();
	 BtnsPage();
	 svgDog();
};

window.addEventListener('load', load);
