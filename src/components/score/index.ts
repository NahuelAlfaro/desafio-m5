customElements.define(
    'my-score',
    class extends HTMLElement {
        shadow = this.attachShadow({ mode: 'open' });
        constructor() {
            super();
            this.render();
        }
        render() {
            const style = document.createElement("style");
            style.textContent = `
        .score{
            font-family: 'Odibee Sans';
            width:235px;
            height: 175px;
            margin:0 0 10px 0;
            display:flex;
            justify-content: center;
            flex-direction: column;
            border-radius: 10px;
            border: 10px solid #000000;
            background: #FFFFFF;
            margin-top:20px
        }
        .score__title{
            font-size:55px;
            line-height: 61px;
            letter-spacing: 0.05em;
            text-align: center;
            margin: 0
        }
        .you,.computer{
            text-align:end;
            font-size:45px;
            margin: 0 5px 3px 0;
        }
        `
            this.shadow.appendChild(style);
            const myScore = this.getAttribute("myScore");
            const computerScore = this.getAttribute("computerScore");
            const div = document.createElement("div");
            div.innerHTML = `
        <div class="score">
        <h1 class="score__title">Score</h1>
        <p class="you">you: ${myScore}</p>
        <p class="computer">computer: ${computerScore}</p>
        </div
        `
            this.shadow.appendChild(div);
        }
    });