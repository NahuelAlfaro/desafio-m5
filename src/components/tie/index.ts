customElements.define(
    'a-tie',
    class extends HTMLElement {
        shadow = this.attachShadow({ mode: 'open' });
        constructor() {
            super();
            this.render();

        }
        render() {
            const image = require("/src/images/tie/tie4.png");
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="image">
                </div>
                `
                const style = document.createElement("style");
                style.textContent = `
            .tie{
                width:360px;
                heigth:260px;
            }
            `
                this.shadow.appendChild(style);
                

            const container = div.querySelector(".image") as any
            container.innerHTML = `
                <img class="tie" src=${image}>
                `
            this.shadow.appendChild(div);


            
        }
    }
);
