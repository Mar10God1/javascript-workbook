'use strict';
var cars = ['Ford', 'Dodge', 'Chevrolet', 'Buick'];
function forLoop() {
  for(var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  }
}

forLoop();

var persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

function forIn() {
  for (var key in persons) {
    console.log(persons[key]);
  }
}

forIn();

function forIn2() {
  for(key in persons) {
    console.log(persons.birthDate);
    break;
  }
}

forIn2();

function whileLoop() {
  var i = 0;
  while(i < 1001) {
    console.log(i);
    i++;
  }
}

whileLoop();

function doWhileLoop() {
  var i = 0;
  do {
    i++;
    console.log(i);
  } while(i < 1000)
}

doWhileLoop();
