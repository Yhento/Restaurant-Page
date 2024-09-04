import { createDOMElement } from "./CreateDOMElement";

const renderContactPage = () => {
    const content_div = document.getElementById('content');

    const h2 = createDOMElement('h2', 'main-heading');

    h2.textContent = "This is Where I'd Put My Contact Info! If I Cared!"

    content_div.append(h2);
}

export { renderContactPage };