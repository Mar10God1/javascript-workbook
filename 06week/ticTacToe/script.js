'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let toggle = true;
  let winArr = {};
  let horWin = () => {
    if (winArr[0] === winArr[1] && winArr[1] === winArr[2]  && winArr[1] !== undefined || winArr[3] === winArr[4] && winArr[4] === winArr[5]  && winArr[4] !== undefined || winArr[6] === winArr[7] && winArr[7] === winArr[8] && winArr[7] !== undefined ) {
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
  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        const move = toggle ? 'X' : 'O';
        e.target.innerHTML = move;
        winArr[e.target.attributes[0].value] = move;
        toggle = !toggle;
      } else {
        alert('stop it');
      }
      if (diagWin()) {
        alert('Diagonal Winner!');
      } else if (horWin()) {
        alert('Horizontal Winner!');
      } else if (vertWin()) {
        alert('Vertial Winner!');
      }
    });
  });

  document.querySelector('button').addEventListener('click', (e) => {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
    });
  });
});
