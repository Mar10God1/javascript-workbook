'use strict';
let winArr = [];
let horWin = () => {
  if (winArr[0] === winArr[1] && winArr[1] === winArr[2] && winArr[1] !== undefined || winArr[3] === winArr[4] && winArr[4] === winArr[5] && winArr[4] !== undefined || winArr[6] === winArr[7] && winArr[7] === winArr[8] && winArr[7] !== undefined) {
    return true;
  }
};
let vertWin = () => {
  if (winArr[0] === winArr[3] && winArr[3] === winArr[6] && winArr[3] !== undefined || winArr[1] === winArr[4] && winArr[4] === winArr[7] && winArr[4] !== undefined || winArr[2] === winArr[5] && winArr[5] === winArr[8] && winArr[5] !== undefined) {
    return true;
  }
};
let diagWin = () => {
  if (winArr[0] === winArr[4] && winArr[4] === winArr[8] && winArr[4] !== undefined || winArr[2] === winArr[4] && winArr[4] === winArr[6] && winArr[4] !== undefined) {
    return true;
  }
};
class TicTacToe extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerTurn: 'X'
    };
    this.makeMove = this.makeMove.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.click = this.click.bind(this);
  }

  render() {
    return (

      <div>
        <div className="row">
          <div data-cell="0" onClick={this.click}></div>
          <div data-cell="1" onClick={this.click}></div>
          <div data-cell="2" onClick={this.click}></div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={this.click}></div>
          <div data-cell="4" onClick={this.click}></div>
          <div data-cell="5" onClick={this.click}></div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={this.click}></div>
          <div data-cell="7" onClick={this.click}></div>
          <div data-cell="8" onClick={this.click}></div>
        </div>
      </div>
    );
  }

  makeMove(e) {

    e.target.innerHTML = this.state.playerTurn;
    winArr[e.target.attributes[0].value] = this.state.playerTurn;
    this.setState((oldState) => {
      return oldState.playerTurn = (oldState.playerTurn === 'X') ? 'O' : 'X';
    });
  }
  checkForWin() {
    if (diagWin()) {
      alert('Diagonal Winner: Player ' + this.state.playerTurn);
    } else if (horWin()) {
      alert('Horizontal Winner: Player ' + this.state.playerTurn);
    } else if (vertWin()) {
      alert('Vertial Winner: Player ' + this.state.playerTurn);
    }
  }

  click (e) {
    this.makeMove(e);
    this.checkForWin();
  }
}
ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
