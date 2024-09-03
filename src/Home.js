import { createDOMElement } from "./CreateDOMElement";

import { clearContent } from "./clearContent";

import pizza from './images/pizza.jpg';

const renderHomePage = () => {
    clearContent();

    const content_div = document.getElementById('content');
    
    let h2 = createDOMElement('h2', 'main-heading');
    h2.textContent = "Tyler's Pizza";

    let h3 = createDOMElement('h3', 'sub-heading');
    h3.textContent = "The Best Pizza in the Whole World!";

    const image = new Image();

    image.src = pizza;



    content_div.append(h2, h3, image);

    

}

export { renderHomePage }