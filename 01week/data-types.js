'use strict';

function getDate () {
  return Date();
}

function convertToStiring (num) {
  return num.toString();
}

function convertToNum (string) {
  return parseInt(string);
}

function type (x) {
  return typeof (x);
}

function add (x, y) {
  return x + y;
}

function true2 (x) {
  if (x > 1 && x < 10) {
    console.log('2 are true');
  }
}

function true1 (x) {
  if (x > 100 || x < 10) {
    console.log('1 is true');
  }
}

function notTrue (x) {
  if (!(x > 100) && !(x < 10)) {
    console.log('both are false');
  }
}

getDate();
convertToStiring(34532);
convertToNum('34523');
type('yo');
add(3, 3);
true2(5);
true1(5);
notTrue(5);
