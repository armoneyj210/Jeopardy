// create an array of questions

// Craft a play button
// create a class for the squares names square
// There shold be 36 squares; 30 for questions and 6 for categories
// when the play button is clicked create the game board using a for loop
// as the game board is created add the class square to the tiles
// also the value of each square should be set using a dataset attribute

let playButton = document.querySelector(".playButton");

let questions = [
  {
    cat: "Food",
    answer: "The bread traditionally served with Eggs Benedict",
    solution: [
      "What is English Muffin?",
      "What is a biscuit?",
      "What is toast?",
      "What is unleavened bread?"
    ],
    correct: "What is English Muffin?",
    dollar: "$200"
  },
  {
    cat: "Food",
    answer: "The temperature at which water boils.",
    solution: [
      "What is 212 F?",
      "What is 110 F?",
      "What is 300 F?",
      "What is 350 F?"
    ],
    correct: "What is 212 F?",
    dollar: "$400"
  },
  {
    cat: "Food",
    answer: "Chevre is a type of cheese made from this animal.",
    solution: [
      "What is a goat?",
      "What is a cow?",
      "What is a sheep?",
      "What is a dog?"
    ],
    correct: "What is 212 F?",
    dollar: "$600"
  },
  {
    cat: "Food",
    answer: "Kitchen Confidential was written by",
    solution: [
      "Who is Emeril Lagasse?",
      "Who is Bobby Flay?",
      "Who is Guy Fieri?",
      "Who is Anthony Bourdain?"
    ],
    correct: "What is ?",
    dollar: "$800"
  },
  {
    cat: "Food",
    answer: "Argentinian steak sauce is traditionally called this.",
    solution: [
      "What is A1?",
      "What is ketchup?",
      "What is chimichurri?",
      "What is  haricot verts?"
    ],
    correct: "What is chimichurri?",
    dollar: "$1000"
  }
];

for (let i = 0; i < 36; i++) {
  let gameBoard = document.createElement("div");
  let categories = ["Food", "Science", "Music", "Film", "Sports", "Art"];
  gameBoard.classList.add("hidden");
  gameBoard.setAttribute("data-target", "#exampleModal");
  gameBoard.setAttribute("data-toggle", "modal");
  if (i >= 6 && i < 12) {
    gameBoard.textContent = "$200";
    gameBoard.setAttribute(`data-dollar`, "$200");
  } else if (i >= 12 && i < 18) {
    gameBoard.textContent = "$400";
    gameBoard.setAttribute(`data-dollar`, "$400");
  } else if (i >= 18 && i < 24) {
    gameBoard.textContent = "$600";
    gameBoard.setAttribute(`data-dollar`, "$600");
  } else if (i >= 24 && i < 30) {
    gameBoard.textContent = "$800";
    gameBoard.setAttribute(`data-dollar`, "$800");
  } else if (i >= 30 && i < 36) {
    gameBoard.textContent = "$1000";
    gameBoard.setAttribute(`data-dollar`, "$1000");
  }
  document.body.appendChild(gameBoard).classList.add("square");
  if (i >= 0 && i < 6) {
    gameBoard.textContent = categories[i];
    gameBoard.removeAttribute("data-target");
    gameBoard.classList.remove("square");
    gameBoard.classList.add("categories");
  }
  if (i % 6 === 0) {
    gameBoard.setAttribute(`data-cat`, `Food`);
  } else if (i === 7 || i === 13 || i === 19 || i === 25 || i == 31) {
    gameBoard.setAttribute(`data-cat`, `Science`);
  } else if (i === 8 || i === 14 || i === 20 || i === 26 || i === 32) {
    gameBoard.setAttribute(`data-cat`, `Music`);
  } else if (i % 3 === 0) {
    gameBoard.setAttribute(`data-cat`, `Film`);
  } else if (i === 10 || i === 16 || i === 22 || i === 28 || i === 34) {
    gameBoard.setAttribute(`data-cat`, `Sport`);
  } else if (i === 11 || i === 17 || i === 23 || i === 29 || i === 35) {
    gameBoard.setAttribute(`data-cat`, `Art`);
  }
  playButton.addEventListener(`click`, function() {
    playButton.classList.remove("playButton");
    playButton.classList.add("hidden");
    gameBoard.classList.remove("hidden");
  });
  gameBoard.addEventListener("click", function(evt) {
    for (let i = 0; i < questions.length; i++) {
      if (
        questions[i].cat === this.dataset.cat &&
        questions[i].dollar === this.dataset.dollar
      ) {
        let answerText = document.querySelector(".modal-answer");
        let title = document.querySelector(".modal-title");
        let solution1 = document.querySelector('[data-solution="1"]');
        let solution2 = document.querySelector('[data-solution="2"]');
        let solution3 = document.querySelector('[data-solution="3"]');
        let solution4 = document.querySelector('[data-solution="4"]');

        answerText.textContent = questions[i].answer;
        title.textContent = `${questions[i].cat} - ${questions[i].dollar}`;
        solution1.textContent = questions[i].solution[0];
        solution2.textContent = questions[i].solution[1];
        solution3.textContent = questions[i].solution[2];
        solution4.textContent = questions[i].solution[3];
      }
    }
  });
}

let food200 = document.querySelector(`[data-dollar='$200'][data-cat='food']`);
let food400 = document.querySelector(`[data-dollar='$400'][data-cat='food']`);
let food600 = document.querySelector(`[data-dollar='$600'][data-cat='food']`);
let food800 = document.querySelector(`[data-dollar='$800'][data-cat='food']`);
let food1000 = document.querySelector(`[data-dollar='$1000'][data-cat='food']`);

let sci200 = document.querySelector(`[data-dollar='$200'][data-cat='science']`);
let sci400 = document.querySelector(`[data-dollar='$400'][data-cat='science']`);
let sci600 = document.querySelector(`[data-dollar='$600'][data-cat='science']`);
let sci800 = document.querySelector(`[data-dollar='$800'][data-cat='science']`);
let sci1000 = document.querySelector(
  `[data-dollar='$1000'][data-cat='science']`
);

let mus200 = document.querySelector(`[data-dollar='$200'][data-cat='music']`);
let mus400 = document.querySelector(`[data-dollar='$400'][data-cat='music']`);
let mus600 = document.querySelector(`[data-dollar='$600'][data-cat='music']`);
let mus800 = document.querySelector(`[data-dollar='$800'][data-cat='music']`);
let mus1000 = document.querySelector(`[data-dollar='$1000'][data-cat='music']`);

let film200 = document.querySelector(`[data-dollar='$200'][data-cat='film']`);
let film400 = document.querySelector(`[data-dollar='$400'][data-cat='film']`);
let film600 = document.querySelector(`[data-dollar='$600'][data-cat='film']`);
let film800 = document.querySelector(`[data-dollar='$800'][data-cat='film']`);
let film1000 = document.querySelector(`[data-dollar='$1000'][data-cat='film']`);

let sport200 = document.querySelector(`[data-dollar='$200'][data-cat='sport']`);
let sport400 = document.querySelector(`[data-dollar='$400'][data-cat='sport']`);
let sport600 = document.querySelector(`[data-dollar='$600'][data-cat='sport']`);
let sport800 = document.querySelector(`[data-dollar='$800'][data-cat='sport']`);
let sport1000 = document.querySelector(
  `[data-dollar='$1000'][data-cat='sport']`
);

let art200 = document.querySelector(`[data-dollar='$200'][data-cat='art']`);
let art400 = document.querySelector(`[data-dollar='$400'][data-cat='art']`);
let art600 = document.querySelector(`[data-dollar='$600'][data-cat='art']`);
let art800 = document.querySelector(`[data-dollar='$800'][data-cat='art']`);
let art1000 = document.querySelector(`[data-dollar='$1000'][data-cat='art']`);

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
