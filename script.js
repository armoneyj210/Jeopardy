// Craft an input for the user to enter their name

//  This name should appear in the lower left hand corner after the game is loaded.

// Craft a play button

// create a class for the squares names square

// when the play button is clicked create the game board using a for loop
// let categories = ["Food", "Science", "Music", "Film", "Sports", "Art"];

// for (let i = 0; i < 36; i++) {
//   let gameBoard = document.createElement("div");

//   if (i >= 6 && i < 12) {
//     gameBoard.textContent = "$200";
//     gameBoard.setAttribute(`data-dollar`, "$200");
//   } else if (i >= 12 && i < 18) {
//     gameBoard.textContent = "$400";
//     gameBoard.setAttribute(`data-dollar`, "$400");
//   } else if (i >= 18 && i < 24) {
//     gameBoard.textContent = "$600";
//     gameBoard.setAttribute(`data-dollar`, "$600");
//   } else if (i >= 24 && i < 30) {
//     gameBoard.textContent = "$800";
//     gameBoard.setAttribute(`data-dollar`, "$800");
//   } else if (i >= 30 && i < 36) {
//     gameBoard.textContent = "$1000";
//     gameBoard.setAttribute(`data-dollar`, "$1000");
//   }
//   document.body.appendChild(gameBoard).classList.add("square");
//   if (i >= 0 && i < 6) {
//     gameBoard.textContent = categories[i];
//     gameBoard.classList.remove("square");
//     gameBoard.classList.add("categories");
//   }
//   if (i % 6 === 0) {
//     gameBoard.setAttribute(`data-cat`, `food`);
//   } else if (i === 7 || i === 13 || i === 19 || i === 25 || i == 31) {
//     gameBoard.setAttribute(`data-cat`, `science`);
//   } else if (i === 8 || i === 14 || i === 20 || i === 26 || i === 32) {
//     gameBoard.setAttribute(`data-cat`, `music`);
//   } else if (i % 3 === 0) {
//     gameBoard.setAttribute(`data-cat`, `film`);
//   } else if (i === 10 || i === 16 || i === 22 || i === 28 || i === 34) {
//     gameBoard.setAttribute(`data-cat`, `sports`);
//   } else if (i === 11 || i === 17 || i === 23 || i === 29 || i === 35) {
//     gameBoard.setAttribute(`data-cat`, `art`);
//   }
// }
// There shold be 36 squares; 30 for questions and 6 for categories

// as the game board is created add the class square to the tiles

// also the value of each square should be set using a dataset attribute

// Set the users score to zero

// create click event for the squares that produces a modal with a statement and four questions.

// only one answer can be selected

// create functions for if the user gets the answer right

// create function if the user gets it wrong.

// use click event to trigger these functions when user chooses an option from the modal menu.

// make a function for randomly generating questions from a bank

// conditional for if a player has reached 5,000 pts that displays winner.

// If there are no more quesions and the points total is not at 5,000, display try again

// after either a win or a loss the Play button and user name input should reappear.
