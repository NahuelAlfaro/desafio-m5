customElements.define(
    'welcome-title',
    class extends HTMLElement {
        shadow = this.attachShadow({ mode: 'open' });
        constructor() {
            super();
            this.render();
        }
        render() {
            const image = require("/src/images/welcome/welcome.svg");
            const div = document.createElement("div");
            div.innerHTML = `
        <div class="image">
        </div>
        `
            const container = div.querySelector(".image") as any;
            container.innerHTML = `<img src=${image}>`
            this.shadow.appendChild(div);
        }
    }
);