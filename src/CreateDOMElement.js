const createDOMElement = (tag, class_name='') => {

    let element = document.createElement(tag);

    if (class_name) {
        element.classList.add(class_name);
    }

    return element;


}

export { createDOMElement }