'use strict';
let clickCount = 1;
// let divs = document.getElementsByName('div');
// // let b100 = document.getElementById('100');
// // let b75 = document.getElementById('75');
// // let b50 = document.getElementById('50');
// // let b25 = document.getElementById('25');
// // let s1 = document.getElementById('s1');
// // let s2 = document.getElementById('s2');
// // let s3 = document.getElementById('s3');
// let stacks = {
//   s1: [b100, b75, b50, b25],
//   s2: [],
//   s3: []
// };
// let movePiece = function (startStack, endStack) {
//   // Your code here
//   stacks[endStack].push(stacks[startStack].pop());
//
// }
// let isLegal = function (startStack, endStack) {
//   //Your code here
//   var startIndex = stacks[startStack].length - 1;
//   var piecetomove = stacks[startStack][startIndex];
//   var endIndex = stacks[endStack].length -1;
//   var movelocation = stacks[endStack][endIndex];
//   if (!movelocation || piecetomove < movelocation) {
//   return true;
//   } else {
//     return false;
//   }
// }
//

//
// let towersOfHanoi = function (startStack, endStack) {
//
//   if(isLegal(startStack, endStack)) {
//     movePiece(startStack, endStack)
//     checkForWin()
//   }
// }
class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startEnd: 'start'
    };
  }

  render() {
    return (
      <div>
        <div id="s1" data-stack="1">
          <div id="100" data-block="100" onClick={this.clickHandler}></div>
          <div id="75" data-block="75" onClick={this.clickHandler}></div>
          <div id="50" data-block="50" onClick={this.clickHandler}></div>
          <div id="25" data-block="25" onClick={this.clickHandler}></div>
        </div>
        <div id="s2" data-stack="2">
        </div>
        <div id="s3" data-stack="3">
        </div>
      </div>
    );
  }

  clickHandler(e) {
    debugger;
    let b100 = document.getElementById('100');
    let b75 = document.getElementById('75');
    let b50 = document.getElementById('50');
    let b25 = document.getElementById('25');
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let s3 = document.getElementById('s3');
    let piece = [];
    let checkForWin = function () {
      // Your code here
       if (s2.childNodes.length === 4 || s3.childNodes.length === 4) {
         alert('Winner!');
         return true;
      } else {
         return false;
      }
    };
    if (!clickCount % 2 === 0) {
      piece.unshift(e.target);
    } else {

    }
    checkForWin();
    clickCount++;
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
