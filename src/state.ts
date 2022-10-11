type Play = "piedra" | "papel" | "tijera";
type Results = "ganaste" | "perdiste" | "empate";
const state = {
    data:{
        currentGame:{
            myPlay: "",
            computerPlay:"",
            results:[],
          },
          
        history:{
            player:0,
            computer:0,
        }
    },

    init() {
      let data: any = localStorage.getItem("scoreData");
      if (!data) {
      data = localStorage.setItem("scoreData",'{"player":0,"computer":0}')
    }
      this.data.history = JSON.parse(data);
    },

    getState() {
        return this.data;
      },
    
    setState(newState) {
        this.data = newState;
      },

      
    playerMove(play: Play) {
          const currentState = this.getState();
           currentState.currentGame.myPlay = play;
           
           const computerMove = () => {
           const computerPick = Math.floor(Math.random() * (3))
           const moves = ["piedra", "papel", "tijera"]
           const finalMove = moves[computerPick];
           return finalMove;
         }
         const data = currentState as any
        data.currentGame.computerPlay = computerMove();

      },
    // computerMove () {
    //         const currentState = this.getState();
    //         const computerPick = Math.floor(Math.random() * (3))
    //         const moves = ["piedra", "papel", "tijera"]
    //         const finalMove = moves[computerPick];
    //         currentState.currentGame.computerPlay = finalMove;
    //       },

    whoWins(player: Play, computer: Play) {
            const currentState = this.getState();
            const result = currentState.currentGame.results;
            const rockWin: boolean = player == "piedra" && computer == "tijera";
            const paperWin: boolean = player == "papel" && computer == "piedra";
            const scissorsWin: boolean = player == "tijera" && computer == "papel";
            const Win = [rockWin, paperWin, scissorsWin].includes(true);
        
            const rockTie: boolean = player == "piedra" && computer == "piedra";
            const paperTie: boolean = player == "papel" && computer == "papel";
            const scissorsTie: boolean = player == "tijera" && computer == "tijera";
            const tie = [rockTie, paperTie, scissorsTie].includes(true);
            
            if (Win) {
              return result[0] = "ganaste";
            }

            else if (tie) {
                return result[0] = "empate";
            }
          
            else {
                return result[0] = "perdiste";
            }
        },

    pushToHistory(result: Results) {
        const currentState = this.getState();
        const playerScore = currentState.history.player;
        const computerScore = currentState.history.computer;
            
            if (result == "ganaste") {
                this.setState({
                    ...currentState,
                    history: {
                      player: playerScore + 1,
                      computer: computerScore,
                    }
                })
                }else if (result == "perdiste") {
                  this.setState({
                    ...currentState,
                    history: {
                      player: playerScore,
                      computer: computerScore + 1,
                    },
                  })
                }
                this.saveScore();
              },

    saveScore() {
        const currentState = this.getState().history;
        localStorage.setItem("scoreData", JSON.stringify(currentState));
        },

    resetScore(){

        const resetScore = { player: 0, computer: 0 };
        localStorage.setItem("scoreData", JSON.stringify(resetScore));
            
        }
}

export { state };
