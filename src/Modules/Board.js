import React from 'react'
import { Square } from '../helpers'


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {
        row: 3,
        column: 3
      }
    };

  }
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  handleChange(e, name){
    const { value, min, max } = e.target;
    let board = this.state.board;
    board[name] = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({
      board
    });
  }
  render() {
    const { row } = this.state.board;
    const items = [];
    for (let i = 0; i < row; i++) {
     items.push(<div className="board-row" key={`board-${i}`}>{this.renderSquare(0)}</div>)
    }
    return (
      <div>
          <label> Enter Number Of Rows Here:
            <input type="number" min="1" max="30" value={this.state.board.row} onChange={(e) => this.handleChange(e, 'row')} />
          </label>
          <label> Enter Number Of column Here:
            <input type="number" min="1" max="30"  value={this.state.board.column} onChange={(e) => this.handleChange(e, 'column')} />
          </label>
        {
          items
        }
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
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
    );
  }
}
