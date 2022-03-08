//Problems from: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// ---------------------------------------------
// == Carousel ==
// Write a program that launches a carousel for 10 turns, showing the turn number each time.

function carousel() {
  for (let i = 1; i < 11; i++) {
    console.log(`Turn: ${i}`);
  };
}
// carousel();


// Improve it so that the number of turns is given by the user.
//let turn = prompt('How many turns for the carousel?');

function newCarousel() {
  let turn = prompt('How many turns for the carousel?');
  
  for (let i = 1; i <= turn; i++) {
    console.log(`Turn: ${i}`);
  };
}
// newCarousel();

//---------------------------------------------
// == Parity ==
//Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }
//
//This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.
// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
//
//Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

 function evensOdds() {
   for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
 }
// evensOdds();

function newEvensOdds() {
  let userInput = prompt('Please enter a number between 1 & 10', 1);
  
  for (let i = userInput; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}
// newEvensOdds();

//---------------------------------------------
// == Input validation ==
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

function validate() {
  let userNum = prompt('Please enter a number...');
  while (userNum > 100) {
    userNum = prompt('Please enter a different number...');
  }
}
// validate();

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

function newValidate() {
  let userNum = prompt('Please enter a number...');
  while ((userNum >= 100) || (userNum <= 50)) {
    userNum = prompt('Please enter a different number...');
  }
}
// newValidate();

//---------------------------------------------
// == Multiplication Table ==

// Write a program that asks the user for a number, then shows the multiplication table for this number.

function timesTable() {
  let userNum = prompt('Pick a number, any number...');
  for (let i = 0; i <= 12; i++) {
    console.log(`${userNum} x ${i} = ${userNum * i}`);
  };
}
// timesTable();

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

function newTimesTable() {
  let userNum = prompt('Pick a number between 2 and 9...');

  while ((userNum >= 9) || (userNum <= 2)) {
    userNum = prompt('Error: please enter a number between 2 and 9...');
  }

  for (let i = 0; i <= 12; i++) {
    console.log(`${userNum} x ${i} = ${userNum * i}`);
  };
}

// newTimesTable();

//---------------------------------------------
// == Neither Yes nor No ==
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

//NEED TO REVISIT, having trouble figuring it out.

function yesNorNo() {
  let userAnswer = prompt('Yes or no?');

  while ((userAnswer !== "yes") || (userAnswer !== "no")) {
    userAnswer = prompt('You can only choose yes or no...');
  }
}


//---------------------------------------------
// == Fizz Buzz ==
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i + ' FizzBuzz');
    } else if (i % 3 === 0) {
      console.log(i + ' Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i + ' Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz();