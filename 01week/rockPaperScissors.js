'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Array style
// var hand2options = ['rock', 'paper', 'scissors'];
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// var hand2 = hand2options[getRandomInt(0,2)];
// //Floating point style
// var hand2 = Math.random();
// if (hand2 < 0.34) {
// 	hand2 = "rock";
// } else if(hand2 <= 0.67) {
// 	hand2 = "paper";
// } else {
// 	hand2 = "scissors";
// }

function getRandom () {
  var hand2options = ['rock', 'paper', 'scissors'];
  var number = Math.floor(Math.random() * 3);
  return hand2options[number];
}

function rockPaperScissors (hand1, hand2) {
  console.log('Hand2 chose ' + hand2);
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  // Write code here
  if (hand1 === hand2) {
    return 'It\'s a tie!';
  } else if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'Hand one wins!';
    } else {
      return 'Hand two wins!';
    }
  } else if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'Hand one wins!';
    } else {
      return 'Hand two wins!';
    }
  } else if (hand1 === 'scissors') {
    if (hand2 === 'paper') {
      return 'Hand one wins!';
    } else {
      return 'Hand two wins!';
    }
  }
}

function getPrompt () {
  rl.question('hand1: ', (answer1) => {
    //rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, getRandom()));
      getPrompt();
    //});
  });
}
// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
