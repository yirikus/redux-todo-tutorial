/**
 * TODO: 
1. Display the location for each move in the format (col, row) in the move history list.
2. Bold the currently selected item in the move list.
3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
4. Add a toggle button that lets you sort the moves in either ascending or descending order.
5. When someone wins, highlight the three squares that caused the win.
6. variable board size
  - dynamic win codnition detection
  - fields to create a board
7. score sheet
 - player names
8. variable target length (3,5,7)
9. tournament mode with spider
10. online play with lobby :D
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const DEFAULT_STATE = {
      history:[{squares: Array(9).fill(null)}],
      stepNumber:0,
      xIsNext: true
    };

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return ( 
           <Square value={this.props.squares[i]}
                   onClick={() => this.props.onClick(i)} //onClick={() => this.handleClick(i)}
                   />);
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

class Game extends React.Component {
   constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

 jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

handleClick(i) {
    //slice - copies the squares array to avoid mutating existing array
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
     if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = (this.state.xIsNext ? 'X' : 'O');
    this.setState({history: history.concat({squares: squares}), 
                   stepNumber: history.length,
                   xIsNext: !this.state.xIsNext});
  }

  render() {

    const history = this.state.history;
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares}
                  onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>Moves:</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <Game />;
    }
}

/**
 * Returns 'X' || 'O' || null (null means nobody won yet)
 * @param {String} squares 
 */
function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
