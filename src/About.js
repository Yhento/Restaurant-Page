import { createDOMElement } from "./CreateDOMElement";

const renderAboutPage = () => {
    const content_div = document.getElementById('content');

    const h2 = createDOMElement('h2', 'main-heading');

    h2.textContent = "You Don't Need To Know Anything!"

    content_div.append(h2);
}

export { renderAboutPage };