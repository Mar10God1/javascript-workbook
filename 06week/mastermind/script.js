'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  // Header

  let color = ['offTile'];
  let counter = 0;
  let guess = [];
  let solution = [];
  let winArray = ['rightColorLocation', 'rightColorLocation', 'rightColorLocation', 'rightColorLocation'];
  let hintArray = ['placeHolder', 'placeHolder', 'placeHolder', 'placeHolder'];
  let colorOptions = ['blueTile', 'greenTile', 'yellowTile', 'redTile', 'cyanTile', 'pinkTile'];

// Generate Code
  function generateSolution () {
    for (let i = 0; i < 4; i++) {
      var randomIndex = getRandomInt(0, colorOptions.length);
      solution.push(colorOptions[randomIndex]);
    }
  }

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  generateSolution();
  // Generate Hint
  function generateHint (solution, guess) {
    hintArray = ['placeHolder', 'placeHolder', 'placeHolder', 'placeHolder'];
    let newArray = [];
    var loc = 0;
    var clr = 0;
    for (var i = 0; i < 4; i++) {
      if (solution[i] === guess[i] && solution[i] !== newArray[i]) {
        loc++;
        hintArray.unshift('rightColorLocation');
        hintArray.pop();
        newArray.push(solution[i]);
      }
    }

    for (i = 0; i < 4; i++) {
      var colorIndex = solution.indexOf(guess[i]);
      if (colorIndex > -1) {
        clr++;
        if (hintArray[i] !== 'rightColorLocation' && solution[i] !== newArray[i]) {
          hintArray.unshift('rightColor');
          hintArray.pop();
          newArray.push(solution[i]);
        }
      }
    }
    return hintArray;
  }


  const container = document.createElement('div');
  container.className = 'container';
  document.querySelector('body').prepend(container);
  const header = document.createElement('h1');
  header.className = 'header';
  header.textContent = 'Mastermind';
  document.querySelector('div').appendChild(header);

  // Game Board
  const gameBoard = document.createElement('div');
  gameBoard.className += 'gameBoard';
  document.querySelector('div').appendChild(gameBoard);

  // Game Tile
  const gameTile1 = document.createElement('div');
  gameTile1.className = 'offTile';
  gameBoard.appendChild(gameTile1);
  const gameTile2 = document.createElement('div');
  gameTile2.className = 'offTile';
  gameBoard.appendChild(gameTile2);
  const gameTile3 = document.createElement('div');
  gameTile3.className = 'offTile';
  gameBoard.appendChild(gameTile3);
  const gameTile4 = document.createElement('div');
  gameTile4.className = 'offTile';
  gameBoard.appendChild(gameTile4);

  // Past Play Board
  const playBoard = document.createElement('div');
  playBoard.className = 'playBoard';
  document.querySelector('div').appendChild(playBoard);
  // Played Tiles
  // for (let i = 0; i < 40; i++) {
  //   document.createElement('div');
  //   this.className = 'offTile';
  //   playBoard.appendChild(tile[i]);
  // }
  const Tile1 = document.createElement('div');
  Tile1.className = 'offTile';
  playBoard.appendChild(Tile1);
  const Tile2 = document.createElement('div');
  Tile2.className = 'offTile';
  playBoard.appendChild(Tile2);
  const Tile3 = document.createElement('div');
  Tile3.className = 'offTile';
  playBoard.appendChild(Tile3);
  const Tile4 = document.createElement('div');
  Tile4.className = 'offTile';
  playBoard.appendChild(Tile4);
  const Tile5 = document.createElement('div');
  Tile5.className = 'offTile';
  playBoard.appendChild(Tile5);
  const Tile6 = document.createElement('div');
  Tile6.className = 'offTile';
  playBoard.appendChild(Tile6);
  const Tile7 = document.createElement('div');
  Tile7.className = 'offTile';
  playBoard.appendChild(Tile7);
  const Tile8 = document.createElement('div');
  Tile8.className = 'offTile';
  playBoard.appendChild(Tile8);
  const Tile9 = document.createElement('div');
  Tile9.className = 'offTile';
  playBoard.appendChild(Tile9);
  const Tile10 = document.createElement('div');
  Tile10.className = 'offTile';
  playBoard.appendChild(Tile10);
  const Tile11 = document.createElement('div');
  Tile11.className = 'offTile';
  playBoard.appendChild(Tile11);
  const Tile12 = document.createElement('div');
  Tile12.className = 'offTile';
  playBoard.appendChild(Tile12);
  const Tile13 = document.createElement('div');
  Tile13.className = 'offTile';
  playBoard.appendChild(Tile13);
  const Tile14 = document.createElement('div');
  Tile14.className = 'offTile';
  playBoard.appendChild(Tile14);
  const Tile15 = document.createElement('div');
  Tile15.className = 'offTile';
  playBoard.appendChild(Tile15);
  const Tile16 = document.createElement('div');
  Tile16.className = 'offTile';
  playBoard.appendChild(Tile16);
  const Tile17 = document.createElement('div');
  Tile17.className = 'offTile';
  playBoard.appendChild(Tile17);
  const Tile18 = document.createElement('div');
  Tile18.className = 'offTile';
  playBoard.appendChild(Tile18);
  const Tile19 = document.createElement('div');
  Tile19.className = 'offTile';
  playBoard.appendChild(Tile19);
  const Tile20 = document.createElement('div');
  Tile20.className = 'offTile';
  playBoard.appendChild(Tile20);
  const Tile21 = document.createElement('div');
  Tile21.className = 'offTile';
  playBoard.appendChild(Tile21);
  const Tile22 = document.createElement('div');
  Tile22.className = 'offTile';
  playBoard.appendChild(Tile22);
  const Tile23 = document.createElement('div');
  Tile23.className = 'offTile';
  playBoard.appendChild(Tile23);
  const Tile24 = document.createElement('div');
  Tile24.className = 'offTile';
  playBoard.appendChild(Tile24);
  const Tile25 = document.createElement('div');
  Tile25.className = 'offTile';
  playBoard.appendChild(Tile25);
  const Tile26 = document.createElement('div');
  Tile26.className = 'offTile';
  playBoard.appendChild(Tile26);
  const Tile27 = document.createElement('div');
  Tile27.className = 'offTile';
  playBoard.appendChild(Tile27);
  const Tile28 = document.createElement('div');
  Tile28.className = 'offTile';
  playBoard.appendChild(Tile28);
  const Tile29 = document.createElement('div');
  Tile29.className = 'offTile';
  playBoard.appendChild(Tile29);
  const Tile30 = document.createElement('div');
  Tile30.className = 'offTile';
  playBoard.appendChild(Tile30);
  const Tile31 = document.createElement('div');
  Tile31.className = 'offTile';
  playBoard.appendChild(Tile31);
  const Tile32 = document.createElement('div');
  Tile32.className = 'offTile';
  playBoard.appendChild(Tile32);
  const Tile33 = document.createElement('div');
  Tile33.className = 'offTile';
  playBoard.appendChild(Tile33);
  const Tile34 = document.createElement('div');
  Tile34.className = 'offTile';
  playBoard.appendChild(Tile34);
  const Tile35 = document.createElement('div');
  Tile35.className = 'offTile';
  playBoard.appendChild(Tile35);
  const Tile36 = document.createElement('div');
  Tile36.className = 'offTile';
  playBoard.appendChild(Tile36);
  const Tile37 = document.createElement('div');
  Tile37.className = 'offTile';
  playBoard.appendChild(Tile37);
  const Tile38 = document.createElement('div');
  Tile38.className = 'offTile';
  playBoard.appendChild(Tile38);
  const Tile39 = document.createElement('div');
  Tile39.className = 'offTile';
  playBoard.appendChild(Tile39);
  const Tile40 = document.createElement('div');
  Tile40.className = 'offTile';
  playBoard.appendChild(Tile40);


  // selected
  const selected = document.createElement('div');
  selected.className = 'selected';
  document.querySelector('div').appendChild(selected);
  const selectedTile = document.createElement('div');
  selectedTile.className = 'offTile';
  selected.appendChild(selectedTile);

  // Hint board
  const hintBoard = document.createElement('div');
  hintBoard.className = 'hintBoard';
  document.querySelector('div').appendChild(hintBoard);

  // Hint Tiles
  const hint1 = document.createElement('div');
  hint1.className = 'hints';
  hintBoard.appendChild(hint1);
  const hintTile1 = document.createElement('div');
  hintTile1.className = 'placeHolder';
  hint1.appendChild(hintTile1);
  const hintTile2 = document.createElement('div');
  hintTile2.className = 'placeHolder';
  hint1.appendChild(hintTile2);
  const hintTile3 = document.createElement('div');
  hintTile3.className = 'placeHolder';
  hint1.appendChild(hintTile3);
  const hintTile4 = document.createElement('div');
  hintTile4.className = 'placeHolder';
  hint1.appendChild(hintTile4);

  const hint2 = document.createElement('div');
  hint2.className = 'hints';
  hintBoard.appendChild(hint2);
  const hintTile5 = document.createElement('div');
  hintTile5.className = 'placeHolder';
  hint2.appendChild(hintTile5);
  const hintTile6 = document.createElement('div');
  hintTile6.className = 'placeHolder';
  hint2.appendChild(hintTile6);
  const hintTile7 = document.createElement('div');
  hintTile7.className = 'placeHolder';
  hint2.appendChild(hintTile7);
  const hintTile8 = document.createElement('div');
  hintTile8.className = 'placeHolder';
  hint2.appendChild(hintTile8);


  const hint3 = document.createElement('div');
  hint3.className = 'hints';
  hintBoard.appendChild(hint3);
  const hintTile9 = document.createElement('div');
  hintTile9.className = 'placeHolder';
  hint3.appendChild(hintTile9);
  const hintTile10 = document.createElement('div');
  hintTile10.className = 'placeHolder';
  hint3.appendChild(hintTile10);
  const hintTile11 = document.createElement('div');
  hintTile11.className = 'placeHolder';
  hint3.appendChild(hintTile11);
  const hintTile12 = document.createElement('div');
  hintTile12.className = 'placeHolder';
  hint3.appendChild(hintTile12);


  const hint4 = document.createElement('div');
  hint4.className = 'hints';
  hintBoard.appendChild(hint4);
  const hintTile13 = document.createElement('div');
  hintTile13.className = 'placeHolder';
  hint4.appendChild(hintTile13);
  const hintTile14 = document.createElement('div');
  hintTile14.className = 'placeHolder';
  hint4.appendChild(hintTile14);
  const hintTile15 = document.createElement('div');
  hintTile15.className = 'placeHolder';
  hint4.appendChild(hintTile15);
  const hintTile16 = document.createElement('div');
  hintTile16.className = 'placeHolder';
  hint4.appendChild(hintTile16);


  const hint5 = document.createElement('div');
  hint5.className = 'hints';
  hintBoard.appendChild(hint5);
  const hintTile17 = document.createElement('div');
  hintTile17.className = 'placeHolder';
  hint5.appendChild(hintTile17);
  const hintTile18 = document.createElement('div');
  hintTile18.className = 'placeHolder';
  hint5.appendChild(hintTile18);
  const hintTile19 = document.createElement('div');
  hintTile19.className = 'placeHolder';
  hint5.appendChild(hintTile19);
  const hintTile20 = document.createElement('div');
  hintTile20.className = 'placeHolder';
  hint5.appendChild(hintTile20);


  const hint6 = document.createElement('div');
  hint6.className = 'hints';
  hintBoard.appendChild(hint6);
  const hintTile21 = document.createElement('div');
  hintTile21.className = 'placeHolder';
  hint6.appendChild(hintTile21);
  const hintTile22 = document.createElement('div');
  hintTile22.className = 'placeHolder';
  hint6.appendChild(hintTile22);
  const hintTile23 = document.createElement('div');
  hintTile23.className = 'placeHolder';
  hint6.appendChild(hintTile23);
  const hintTile24 = document.createElement('div');
  hintTile24.className = 'placeHolder';
  hint6.appendChild(hintTile24);


  const hint7 = document.createElement('div');
  hint7.className = 'hints';
  hintBoard.appendChild(hint7);
  const hintTile25 = document.createElement('div');
  hintTile25.className = 'placeHolder';
  hint7.appendChild(hintTile25);
  const hintTile26 = document.createElement('div');
  hintTile26.className = 'placeHolder';
  hint7.appendChild(hintTile26);
  const hintTile27 = document.createElement('div');
  hintTile27.className = 'placeHolder';
  hint7.appendChild(hintTile27);
  const hintTile28 = document.createElement('div');
  hintTile28.className = 'placeHolder';
  hint7.appendChild(hintTile28);


  const hint8 = document.createElement('div');
  hint8.className = 'hints';
  hintBoard.appendChild(hint8);
  const hintTile29 = document.createElement('div');
  hintTile29.className = 'placeHolder';
  hint8.appendChild(hintTile29);
  const hintTile30 = document.createElement('div');
  hintTile30.className = 'placeHolder';
  hint8.appendChild(hintTile30);
  const hintTile31 = document.createElement('div');
  hintTile31.className = 'placeHolder';
  hint8.appendChild(hintTile31);
  const hintTile32 = document.createElement('div');
  hintTile32.className = 'placeHolder';
  hint8.appendChild(hintTile32);


  const hint9 = document.createElement('div');
  hint9.className = 'hints';
  hintBoard.appendChild(hint9);
  const hintTile33 = document.createElement('div');
  hintTile33.className = 'placeHolder';
  hint9.appendChild(hintTile33);
  const hintTile34 = document.createElement('div');
  hintTile34.className = 'placeHolder';
  hint9.appendChild(hintTile34);
  const hintTile35 = document.createElement('div');
  hintTile35.className = 'placeHolder';
  hint9.appendChild(hintTile35);
  const hintTile36 = document.createElement('div');
  hintTile36.className = 'placeHolder';
  hint9.appendChild(hintTile36);


  const hint10 = document.createElement('div');
  hint10.className = 'hints';
  hintBoard.appendChild(hint10);
  const hintTile37 = document.createElement('div');
  hintTile37.className = 'placeHolder';
  hint10.appendChild(hintTile37);
  const hintTile38 = document.createElement('div');
  hintTile38.className = 'placeHolder';
  hint10.appendChild(hintTile38);
  const hintTile39 = document.createElement('div');
  hintTile39.className = 'placeHolder';
  hint10.appendChild(hintTile39);
  const hintTile40 = document.createElement('div');
  hintTile40.className = 'placeHolder';
  hint10.appendChild(hintTile40);




// Selector Board
  const selector = document.createElement('div');
  selector.className = 'selector';
  // Color Tiles
  const blueTile = document.createElement('li');
  blueTile.className = 'blueTile';
  selector.appendChild(blueTile);
  const greenTile = document.createElement('li');
  greenTile.className = 'greenTile';
  selector.appendChild(greenTile);
  const yellowTile = document.createElement('li');
  yellowTile.className = 'yellowTile';
  selector.appendChild(yellowTile);
  const redTile = document.createElement('li');
  redTile.className = 'redTile';
  selector.appendChild(redTile);
  const cyanTile = document.createElement('li');
  cyanTile.className = 'cyanTile';
  selector.appendChild(cyanTile);
  const pinkTile = document.createElement('li');
  pinkTile.className = 'pinkTile';
  selector.appendChild(pinkTile);
  document.querySelector('div').appendChild(selector);



  // Footer
  const footer = document.createElement('div');
  footer.className = 'footer';
  document.querySelector('div').appendChild(footer);
  // Button
  const submit = document.createElement('button');
  submit.className = 'submit';
  submit.textContent = 'SUBMIT CODE';
  footer.appendChild(submit);
  // Click Events

  // Play color
  let tile = gameBoard.querySelectorAll('div');
  tile.forEach((item) => {
    item.addEventListener('click', (e) => {
      let toggle = true;
      if (e.target.className === 'offTile') {
        const move = toggle ? color[0] : 'offTile';
        e.target.className = move;
        toggle = !toggle;
      } else {
        e.target.className = 'offTile';
      }
    });
  });

  // Select color
  let select = selector.querySelectorAll('li');
  select.forEach((item) => {
    item.addEventListener('click', (e) => {
      color.unshift(e.target.className);
      selectedTile.className = color[0];
    });
  });

  // Submit Play

  let submitPlay1 = footer.querySelectorAll('button');
  submitPlay1.forEach((item) => {
    item.addEventListener('click', (e) => {
debugger;
      hintArray = ['placeHolder', 'placeHolder', 'placeHolder', 'placeHolder'];
      guess.push(gameTile1.className);
      guess.push(gameTile2.className);
      guess.push(gameTile3.className);
      guess.push(gameTile4.className);
      generateHint(solution, guess);

      if (counter === 0) {
        Tile1.className = gameTile1.className;
        Tile11.className = gameTile2.className;
        Tile21.className = gameTile3.className;
        Tile31.className = gameTile4.className;
        hintTile1.className = hintArray[0];
        hintTile2.className = hintArray[1];
        hintTile3.className = hintArray[2];
        hintTile4.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution == guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 1) {
        Tile2.className = gameTile1.className;
        Tile12.className = gameTile2.className;
        Tile22.className = gameTile3.className;
        Tile32.className = gameTile4.className;
        hintTile5.className = hintArray[0];
        hintTile6.className = hintArray[1];
        hintTile7.className = hintArray[2];
        hintTile8.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution == guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 2) {
        Tile3.className = gameTile1.className;
        Tile13.className = gameTile2.className;
        Tile23.className = gameTile3.className;
        Tile33.className = gameTile4.className;
        hintTile9.className = hintArray[0];
        hintTile10.className = hintArray[1];
        hintTile11.className = hintArray[2];
        hintTile12.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution == guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 3) {
        Tile4.className = gameTile1.className;
        Tile14.className = gameTile2.className;
        Tile24.className = gameTile3.className;
        Tile34.className = gameTile4.className;
        hintTile13.className = hintArray[0];
        hintTile14.className = hintArray[1];
        hintTile15.className = hintArray[2];
        hintTile16.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution == guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 4) {
        Tile5.className = gameTile1.className;
        Tile15.className = gameTile2.className;
        Tile25.className = gameTile3.className;
        Tile35.className = gameTile4.className;
        hintTile17.className = hintArray[0];
        hintTile18.className = hintArray[1];
        hintTile19.className = hintArray[2];
        hintTile20.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution == guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 5) {
        Tile6.className = gameTile1.className;
        Tile16.className = gameTile2.className;
        Tile26.className = gameTile3.className;
        Tile36.className = gameTile4.className;
        hintTile21.className = hintArray[0];
        hintTile22.className = hintArray[1];
        hintTile23.className = hintArray[2];
        hintTile24.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution === guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 6) {
        Tile7.className = gameTile1.className;
        Tile17.className = gameTile2.className;
        Tile27.className = gameTile3.className;
        Tile37.className = gameTile4.className;
        hintTile25.className = hintArray[0];
        hintTile26.className = hintArray[1];
        hintTile27.className = hintArray[2];
        hintTile28.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution === guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 7) {
        Tile8.className = gameTile1.className;
        Tile18.className = gameTile2.className;
        Tile28.className = gameTile3.className;
        Tile38.className = gameTile4.className;
        hintTile29.className = hintArray[0];
        hintTile30.className = hintArray[1];
        hintTile31.className = hintArray[2];
        hintTile32.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution === guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 8) {
        Tile9.className = gameTile1.className;
        Tile19.className = gameTile2.className;
        Tile29.className = gameTile3.className;
        Tile39.className = gameTile4.className;
        hintTile33.className = hintArray[0];
        hintTile34.className = hintArray[1];
        hintTile35.className = hintArray[2];
        hintTile36.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution === guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      } else if (counter === 9) {
        Tile10.className = gameTile1.className;
        Tile20.className = gameTile2.className;
        Tile30.className = gameTile3.className;
        Tile40.className = gameTile4.className;
        hintTile37.className = hintArray[0];
        hintTile38.className = hintArray[1];
        hintTile39.className = hintArray[2];
        hintTile40.className = hintArray[3];
        gameTile1.className = 'offTile';
        gameTile2.className = 'offTile';
        gameTile3.className = 'offTile';
        gameTile4.className = 'offTile';
        if (solution === guess) {
          header.className = 'winner';
          header.textContent = 'Winner!'
          console.log('win');
        }
        guess = [];
        counter++;
      }
    });
  });
  if (counter === 9) {
    alert('loser');
  }
});
