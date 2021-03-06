'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard () {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution () {
  for (let i = 0; i < 4; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint (solution, guess) {
  var loc = 0;
  var ltr = 0;
  solution = solution.split('');
  guess = guess.split('');
  for (var i = 0; i < 4; i++) {
    if (solution[i] === guess[i]) {
      loc++;
      solution[i] = null;
    }
  }

  for (i = 0; i < 4; i++) {
    var ltrIndex = solution.indexOf(guess[i]);
    if (ltrIndex > -1) {
      ltr++;
      solution[ltrIndex] = null;
    }
  }
  return loc + '-' + ltr;
}

function mastermind (guess) {
  solution = 'abcd';
  if (guess === solution) {
    console.log('You guessed it!');
    return ('You guessed it!');
  } else if (board.length === 10) {
    console.log('Game Over');
  } else {
    var hint = generateHint(solution, guess);
    board.push(guess + ': ' + hint);
  }
}

function getPrompt () {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  describe('#mastermind()', function () {
    it('should register a guess and generate hints', function () {
        solution = 'abcd';
        mastermind('aabb');
        assert.equal(board.length, 1);
      });
      it('should be able to detect a win', function() {
          assert.equal(mastermind(solution), 'You guessed it!');
      });
  });

  describe('#generateHint()', function() {
      it('should generate hints', function() {
          assert.equal(generateHint('abcd', 'abdc'), '2-2');
      });
      it('should generate hints if solution has duplicates', function() {
          assert.equal(generateHint('abcd', 'aabb'), '1-1');
      });

  });

} else {

  generateSolution();
  getPrompt();
}
