export function rules(routh) {
    const div = document.createElement("div");
    const rules = require("/src/images/rules/rules.svg");
    div.innerHTML = `
            <img src=${rules} alt="">
            <start-button class="sButton" title="¡Jugar!"></start-button>
            <div class="plays">
                <my-rock></my-rock>
                <my-paper></my-paper>
                <my-scissors></my-scissors>
            </div>
            `
    div.classList.add("container");
    const style = document.createElement("style");
    style.textContent = `
            .plays{
                width: 80%;
                display:flex;
                justify-content: space-evenly;
                position: relative;
                top: 10px;
            }
            @media(min-width:960px){
                .plays{
                    width: 50%;
                }
            }
            .container{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 100vh;
                padding-top: 85px;
            }
            `
    function startGame() {
        const startButton = div.querySelector(".sButton");
        startButton?.addEventListener("click", () => {
            routh.goTo("/play");
        })
    }
    startGame();

    div.appendChild(style);
    return div;
}