'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  word = word.toLowerCase().trim();
  var vowel = ['e', 'a', 'i', 'o', 'u'];
  var results = [];

  for (var i = 0; i < vowel.length; i++) {
    if (word.indexOf(vowel[i]) > -1) {
      results.push(word.indexOf(vowel[i]));
    }
  }
  results.sort();
  var vowelIndex = results[0];
  var first = word.slice(vowelIndex, word.length);
  var second = word.slice(0, vowelIndex);
  if (vowelIndex === 0) {
    return word + 'yay';
  } else {
    return first + second + 'ay';
  }
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
