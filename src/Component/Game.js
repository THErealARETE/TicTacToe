import React from 'react'
import Board from './Board'


  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber:0,
        xIsNext: true,
      };
    }


    handleBoxRestart(){
      this.setState({
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber:0,
        xIsNext: true,
      })
    }

    handleClick (i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (this.calculateWinner(squares)  || squares[i]){
        return ; 
      }
      squares[i] = this.state.xIsNext ? 'x' : 'o'
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });

    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    // finalJump (){}

    // matchStepNumber (stepNumber){
    //   if (stepNumber === 1){
    //     console.log('1')
    //   }
    // }
    

    calculateWinner (squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
         {
          return squares[a];
        }
      }
      return null;
    } 

    

    position (squares) {

      const rowColumn = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ];
      for (let i = 0; i < rowColumn.length; i++) {
        const [a,b,c] = rowColumn[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
        // if (squares[a] === rowColumn[a]){
        //   return alert('a')
        // }
      }
      return null 
    };

    // makeBold(){
    //   const font = {
    //     fontWeight: 'bold',
    //   }
    // }



    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.squares);
      const where = this.position(current.squares)


      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move + ' at position' + where : 
          'Go to game start';
        return (
          <li key={move}>
          <button    
          onClick = {() => this.jumpTo(move)}>
            {desc}
            </button>
            <div>
            <button
            onClick = {this.handleBoxRestart}>
            restart 
            </button>
            </div>
            
           
          </li>
        );
      });

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
             calculateWinner ={this.calculateWinner}
             squares = {current.squares}
             onClick={(i) => this.handleClick(i)}
             />
          </div>
          <div className="game-info">
            <div>{ status }</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;