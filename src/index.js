import './styles/index.css';

function component(text) {
    let element = document.createElement('div');

    element.innerHTML = text;

    return element;
}

document.body.appendChild(component('Webpack working'));
