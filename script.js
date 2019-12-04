// Craft an input for the user to enter their name

//  This name should appear in the lower left hand corner after the game is loaded.

// Craft a play button

// create a class for the squares names square

// There shold be 36 squares; 30 for questions and 6 for categories

// when the play button is clicked create the game board using a for loop

// as the game board is created add the class square to the tiles

// also the value of each square should be set using a dataset attribute
let categories = ["Food", "Science", "Music", "Film", "Sports", "Art"];
let playButton = document.querySelector(".playButton");

for (let i = 0; i < 36; i++) {
  let gameBoard = document.createElement("div");
  gameBoard.classList.add("hidden");
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
    gameBoard.classList.remove("square");
    gameBoard.classList.add("categories");
  }
  if (i % 6 === 0) {
    gameBoard.setAttribute(`data-cat`, `food`);
  } else if (i === 7 || i === 13 || i === 19 || i === 25 || i == 31) {
    gameBoard.setAttribute(`data-cat`, `science`);
  } else if (i === 8 || i === 14 || i === 20 || i === 26 || i === 32) {
    gameBoard.setAttribute(`data-cat`, `music`);
  } else if (i % 3 === 0) {
    gameBoard.setAttribute(`data-cat`, `film`);
  } else if (i === 10 || i === 16 || i === 22 || i === 28 || i === 34) {
    gameBoard.setAttribute(`data-cat`, `sport`);
  } else if (i === 11 || i === 17 || i === 23 || i === 29 || i === 35) {
    gameBoard.setAttribute(`data-cat`, `art`);
  }
  playButton.addEventListener(`click`, function() {
    playButton.classList.remove("playButton");
    playButton.classList.add("hidden");
    gameBoard.classList.remove("hidden");
  });
}

let food200 = document.querySelector(`[data-dollar='$200'][data-cat='food']`);
food200.setAttribute("data-target", "#exampleModal");
food200.setAttribute("data-toggle", "modal");
let food400 = document.querySelector(`[data-dollar='$400'][data-cat='food']`);
let food600 = document.querySelector(`[data-dollar='$600'][data-cat='food']`);
let food800 = document.querySelector(`[data-dollar='$800'][data-cat='food']`);
let food1000 = document.querySelector(`[data-dollar='$1000'][data-cat='food']`);

food200.addEventListener("click", function() {
  alert("You clicked on food for $200");
});
food400.addEventListener("click", function() {
  alert("You clicked on food for $400");
});
food600.addEventListener("click", function() {
  alert("You clicked on food for $600");
});
food800.addEventListener("click", function() {
  alert("You clicked on food for $800");
});
food1000.addEventListener("click", function() {
  alert("You clicked on food for $200");
});

let sci200 = document.querySelector(`[data-dollar='$200'][data-cat='science']`);
let sci400 = document.querySelector(`[data-dollar='$400'][data-cat='science']`);
let sci600 = document.querySelector(`[data-dollar='$600'][data-cat='science']`);
let sci800 = document.querySelector(`[data-dollar='$800'][data-cat='science']`);
let sci1000 = document.querySelector(
  `[data-dollar='$1000'][data-cat='science']`
);
sci200.addEventListener("click", function() {
  alert("You clicked on science for $200");
});
sci400.addEventListener("click", function() {
  alert("You clicked on science for $400");
});
sci600.addEventListener("click", function() {
  alert("You clicked on science for $600");
});
sci800.addEventListener("click", function() {
  alert("You clicked on science for $800");
});
sci1000.addEventListener("click", function() {
  alert("You clicked on science for $1000");
});

let mus200 = document.querySelector(`[data-dollar='$200'][data-cat='music']`);
let mus400 = document.querySelector(`[data-dollar='$400'][data-cat='music']`);
let mus600 = document.querySelector(`[data-dollar='$600'][data-cat='music']`);
let mus800 = document.querySelector(`[data-dollar='$800'][data-cat='music']`);
let mus1000 = document.querySelector(`[data-dollar='$1000'][data-cat='music']`);

mus200.addEventListener("click", function() {
  alert("You clicked on music for $200");
});
mus400.addEventListener("click", function() {
  alert("You clicked on music for $400");
});
mus600.addEventListener("click", function() {
  alert("You clicked on music for $600");
});
mus800.addEventListener("click", function() {
  alert("You clicked on music for $800");
});
mus1000.addEventListener("click", function() {
  alert("You clicked on music for $1000");
});

let film200 = document.querySelector(`[data-dollar='$200'][data-cat='film']`);
let film400 = document.querySelector(`[data-dollar='$400'][data-cat='film']`);
let film600 = document.querySelector(`[data-dollar='$600'][data-cat='film']`);
let film800 = document.querySelector(`[data-dollar='$800'][data-cat='film']`);
let film1000 = document.querySelector(`[data-dollar='$1000'][data-cat='film']`);

film200.addEventListener("click", function() {
  alert("You clicked on film for $200");
});
film400.addEventListener("click", function() {
  alert("You clicked on film for $400");
});
film600.addEventListener("click", function() {
  alert("You clicked on film for $600");
});
film800.addEventListener("click", function() {
  alert("You clicked on film for $800");
});
film1000.addEventListener("click", function() {
  alert("You clicked on film for $1000");
});

let sport200 = document.querySelector(`[data-dollar='$200'][data-cat='sport']`);
let sport400 = document.querySelector(`[data-dollar='$400'][data-cat='sport']`);
let sport600 = document.querySelector(`[data-dollar='$600'][data-cat='sport']`);
let sport800 = document.querySelector(`[data-dollar='$800'][data-cat='sport']`);
let sport1000 = document.querySelector(
  `[data-dollar='$1000'][data-cat='sport']`
);

sport200.addEventListener("click", function() {
  alert("You clicked on sports for $200");
});
sport400.addEventListener("click", function() {
  alert("You clicked on sports for $400");
});
sport600.addEventListener("click", function() {
  alert("You clicked on sports for $600");
});
sport800.addEventListener("click", function() {
  alert("You clicked on sports for $800");
});
sport1000.addEventListener("click", function() {
  alert("You clicked on sports for $1000");
});

let art200 = document.querySelector(`[data-dollar='$200'][data-cat='art']`);
let art400 = document.querySelector(`[data-dollar='$400'][data-cat='art']`);
let art600 = document.querySelector(`[data-dollar='$600'][data-cat='art']`);
let art800 = document.querySelector(`[data-dollar='$800'][data-cat='art']`);
let art1000 = document.querySelector(`[data-dollar='$1000'][data-cat='art']`);

art200.addEventListener("click", function() {
  alert("You clicked on art for $200");
});
art400.addEventListener("click", function() {
  alert("You clicked on art for $400");
});
art600.addEventListener("click", function() {
  alert("You clicked on art for $600");
});
art800.addEventListener("click", function() {
  alert("You clicked on art for $800");
});
art1000.addEventListener("click", function() {
  alert("You clicked on art for $1000");
});
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
