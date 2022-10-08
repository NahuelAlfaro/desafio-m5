import { state } from "../../state";

export function win(routh) {
    const div = document.createElement("div");
    const currentState = state.getState();
    div.innerHTML = `
        <you-win class="star"></you-win>
        <my-score myScore=${currentState.history.player} computerScore= ${currentState.history.computer}></my-score>
        <start-button title="play again" class="sButton"></start-button>
        <start-button title="Reset Scores" class="sButton reset"></start-button>
        `
    div.classList.add("container");

    const style = document.createElement("style");
    style.textContent = `
        .container{
            background: #4a950d99;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100vh;
        }
        .sButton{
            margin-top:4px;
        }
        `
    const startButton = div.querySelector(".sButton");
    const reset = div.querySelector(".reset");
    startButton?.addEventListener("click", () => {
        routh.goTo("/play");
    })
    reset?.addEventListener("click", () => {
        state.resetScore();
        state.init();

        routh.goTo("/rules");
    })

    div.appendChild(style);
    return div;
}