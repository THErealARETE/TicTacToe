import React from 'react'
import Square from './Square'

class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square 
        //const position = {[1,2,3,4,5,6,7,8,9]}
        value ={this.props.squares[i]}
      onClick = {() =>this.props.onClick(i)}
      
      />
      )
    }
   
  
    render() {

      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  

  export default Board;