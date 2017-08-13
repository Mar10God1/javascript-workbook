'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newchecker = new Checker('white');

function Checker(color) {
  // Your code here
  if (color === 'white') {
    this.symbol = 'W';
  } else {
    this.symbol = 'B';
  }
}

function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  // Your code here
  this.checkers = [];
  this.createCheckers = function () {
    const whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]];
    const blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]];
    for (let i = 0; i < whitePositions.length; i++) {
      this.checkers.push(this.grid[whitePositions[i][0]][whitePositions[i][1]] = new Checker('white'));
      this.checkers.push(this.grid[blackPositions[i][0]][blackPositions[i][1]] = new Checker('black'));
    }
  };
  this.selectChecker = function (row, column) {
    return this.grid[row][column];
  };
  this.killChecker = function (position) {
    const dyingChecker = this.selectChecker(position[0],position[1]);
    const index = this.checkers.indexOf(dyingChecker);
    this.checkers.splice(index,1);
    this.grid[position[0]][position[1]] = null;
  };
}
function Game () {
  this.board = new Board();
  this.start = function () {
    this.board.createGrid();
    this.board.createCheckers();
  };
  this.moveChecker = function (from, to) {
    const fromX = parseInt(from[0]);
    const fromY = parseInt(from[1]);
    const toX = parseInt(to[0]);
    const toY = parseInt(to[1]);
    const checker = this.board.selectChecker(from[0], from[1]);
    this.board.grid[ toX ][ toY ] = checker;
    this.board.grid[fromX][fromY] = null;
    if (Math.sqrt((toX - fromX)^2 + (toY - fromY)^2) >= 2) {
      this.board.killChecker([(toX + fromX) / 2, (toY + fromY) / 2]);
    }
  };
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
