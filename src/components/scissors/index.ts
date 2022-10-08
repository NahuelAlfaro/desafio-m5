customElements.define(
    'my-scissors',
    class extends HTMLElement {
        shadow = this.attachShadow({ mode: 'open' });
        constructor() {
            super();
            this.render();
        }
        render() {
            const image = require("/src/images/scissors/scissors.svg")
            const img = document.createElement("img");
            img.src = image;
            this.shadow.appendChild(img);
        }
    }
);