export function welcome(routh) {
    const div = document.createElement("div");
    div.innerHTML = `
        <welcome-title></welcome-title>
        <start-button class="sButton" title="Empezar"></start-button>
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
            display:flex;
            width: 80%;
            justify-content: space-evenly;
            position: relative;
            top: 10px;
        }
        .container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            padding: 85px 0 0 0;
        }
        `
    function startGame() {
        const startButton = div.querySelector(".sButton");
        startButton?.addEventListener("click", (e) => {
            routh.goTo("/rules");
        })

    }
    startGame();

    div.appendChild(style);
    return div;
}