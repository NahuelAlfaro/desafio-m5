import { state } from "../../state";

export function play(routh) {
  let timer = 3
  const interval: any = setInterval(() => {
    timer--;
    const timerEl = div.querySelector(".timer") as any
    timerEl.textContent = String(timer)
    if (timer == -1) {
      clearInterval(interval)
      routh.goTo("/rules")
    }
  }, 1000)

  const rockImg = require("/src/images/rock/rock.svg");
  const paperImg = require("/src/images/paper/paper.svg");
  const scissorsImg = require("/src/images/scissors/scissors.svg");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="timer">${timer}</div>
    <div class="hands-computer">
    <img hand="piedra" class="computer-rock disable-play"src=${rockImg} alt="">
    <img hand="papel" class="computer-paper disable-play"src=${paperImg} alt="">
    <img hand="tijera" class="computer-scissors disable-play"src=${scissorsImg} alt="">
    </div>
      <div class="plays">
        <img  class="rock-play"src=${rockImg} alt="">
        <img  class="paper-play"src=${paperImg} alt="">
        <img  class="scissors-play"src=${scissorsImg} alt="">
       </div>
    `;
  div.classList.add("container");

  const computerRock = div.querySelector(".computer-rock");
  const computerPaper = div.querySelector(".computer-paper");
  const computerScissors = div.querySelector(".computer-scissors");

  const style = document.createElement("style");
  style.textContent = `
      .plays{
          display:flex;
          width: 100%;
          justify-content: space-evenly;
          translate: 0px 5px;
      }
      @media(min-width:960px){
        .plays{
          width: 70%;
        }
      }
      .disable-play{
        display:none;
      }
      .computer-rock,
      .computer-paper,
      .computer-scissors{
        transform: rotate(180deg);
      }
      .rock-play:hover,
      .paper-play:hover,
      .scissors-play:hover{
        transform: translateY(-5px);
      }
      .hand-select{
        transform: translateY(-25px);
        transition: all 0.5s;
      }
      .deselected{
        opacity: 0.5;
        transform: translateY(5px);
        transition: all 0.5s;
      }
      .container{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
          padding: 85px 0 0 0;
      }
      .timer{
        font-size: 80px;
        border-radius: 35px;
        border: solid 15px crimson;
        padding: 20px 50px;
        font-family: fantasy;
      }
      .begin{
        padding:50px 0 0 0;
      }
      `;
  const rock = div.querySelector(".rock-play");
  const paper = div.querySelector(".paper-play");
  const scissors = div.querySelector(".scissors-play");
  const time = div.querySelector(".timer");

  const plays: any = div.querySelector(".plays")?.children;

  for (const h of plays) {
    h.addEventListener("click", () => {
      const clase = h.getAttribute("class");
      clearInterval(interval);

      if (clase == "rock-play") {
        state.playerMove("piedra");
        classDinamic(rock);

      } else if (clase == "paper-play") {
        state.playerMove("papel");
        classDinamic(paper);

      } else if (clase == "scissors-play") {
        state.playerMove("tijera");
        classDinamic(scissors);
      }
    })
  };

  function classDinamic(params) {
    for (const h of plays) {
      h.classList.add("deselected");
    }
    if (params == rock) {
      params?.classList.add("hand-select");
      params?.classList.remove("deselected");
      params?.classList.remove("rock-play");
      paper?.classList.remove("paper-play");
      scissors?.classList.remove("scissors-play");

      setTimeout(() => {
        paper?.classList.add("disable-play");
        scissors?.classList.add("disable-play");
        div.classList.add("begin");
      }, 1000)

    } if (params == paper) {
      params?.classList.add("hand-select");
      params?.classList.remove("deselected");
      params?.classList.remove("rock-play");
      paper?.classList.remove("paper-play");
      scissors?.classList.remove("scissors-play");
      setTimeout(() => {
        rock?.classList.add("disable-play");
        scissors?.classList.add("disable-play");
        div.classList.add("begin");
      }, 1000)

    } if (params == scissors) {
      params?.classList.add("hand-select");
      params?.classList.remove("deselected");
      params?.classList.remove("rock-play");
      paper?.classList.remove("paper-play");
      scissors?.classList.remove("scissors-play");

      setTimeout(() => {
        rock?.classList.add("disable-play");
        paper?.classList.add("disable-play");
        div.classList.add("begin");
      }, 1000)
    }

    const play = state.getState().currentGame.myPlay;
    const computerPlay = state.getState().currentGame.computerPlay;

    setTimeout(() => {
      time?.remove();
      if (computerPlay == "piedra") {
        computerRock?.classList.remove("disable-play");
        const re = state.whoWins(play, "piedra");
        console.log(re);

      } if (computerPlay == "papel") {
        computerPaper?.classList.remove("disable-play");
        const re = state.whoWins(play, "papel");
        console.log(re);

      } if (computerPlay == "tijera") {
        computerScissors?.classList.remove("disable-play");
        const re = state.whoWins(play, "tijera");
        console.log(re);
      }
    }, 1000);

    setTimeout(() => {
      const currentState = state.getState();
      if (currentState.currentGame.results == "empate") {
        state.pushToHistory("empate");
        routh.goTo("/tie");
      } else if (currentState.currentGame.results == "ganaste") {
        state.pushToHistory("ganaste");
        routh.goTo("/win");
      } else if (currentState.currentGame.results == "perdiste") {
        state.pushToHistory("perdiste");
        routh.goTo("/lose");
      }

    }, 2800);
  }
  div.appendChild(style);
  return div;
}