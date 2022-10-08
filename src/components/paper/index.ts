customElements.define(
    'my-paper',
    class extends HTMLElement {
        shadow = this.attachShadow({ mode: 'open' });
        constructor() {
            super();
            this.render();
        }
        render() {
            const image = require("/src/images/paper/paper.svg");
            const img = document.createElement("img");
            img.src = image;
            this.shadow.appendChild(img);
        }
    }
);