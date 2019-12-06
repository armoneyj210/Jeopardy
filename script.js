// create an array of questions

// Craft a play button
// create a class for the squares names square
// There shold be 36 squares; 30 for questions and 6 for categories
// when the play button is clicked create the game board using a for loop
// as the game board is created add the class square to the tiles
// also the value of each square should be set using a dataset attribute

let playButton = document.querySelector(".playButton");
let audio = document.querySelector("audio");
audio.autoplay = true;
let questions = [
  {
    cat: "Food",
    answer: "The bread traditionally served with Eggs Benedict",
    solution: [
      "What is an English Muffin?",
      "What is a biscuit?",
      "What is a pancake?",
      "What is French Toast?"
    ],
    correct: "What is English Muffin?",
    dollar: "200"
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
    dollar: "400"
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
    dollar: "600"
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
    correct: "Who is Anthony Bourdain?",
    dollar: "800"
  },
  {
    cat: "Food",
    answer: "Argentinian steak sauce is traditionally called this.",
    solution: [
      "What is A1?",
      "What is ketchup?",
      "What is chimichurri?",
      "What is haricot verts?"
    ],
    correct: "What is chimichurri?",
    dollar: "1000"
  },
  {
    cat: "Science",
    answer:
      "Hydrogen is represented by this symbol on the periodic table of elements.",
    solution: ["What is He?", "What is Hr?", "What is H?", "What is O?"],
    correct: "What is H?",
    dollar: "200"
  },
  {
    cat: "Science",
    answer: "Atoms are most tightly packed in this type of matter.",
    solution: [
      "What is gases?",
      "What is solids?",
      "What is liquids?",
      "What is solids?"
    ],
    correct: "What is solids?",
    dollar: "400"
  },
  {
    cat: "Science",
    answer: "This planet has the most moons.",
    solution: [
      "What is Jupiter?",
      "What is Saturn?",
      "What is Uranus?",
      "What is Mercury?"
    ],
    correct: "What is Jupiter?",
    dollar: "600"
  },
  {
    cat: "Science",
    answer: "Hurricanes only form over this.",
    solution: [
      "What is cold water?",
      "What is cold land?",
      "What is warm land?",
      "What is warm water?"
    ],
    correct: "What is warm water?",
    dollar: "800"
  },
  {
    cat: "Science",
    answer: "This species was famously studied by Charles Darwin",
    solution: [
      "What is crane?",
      "What is sparrow?",
      "What is pelican?",
      "What is finch?"
    ],
    correct: "What is finch?",
    dollar: "1000"
  },
  {
    cat: "Music",
    answer: "This pop singer is known as the 'Material Girl'.",
    solution: [
      "Who is Taylor Swfit?",
      "Who is Britney Spears?",
      "Who is Ke$ha?",
      "Who is Madonna?"
    ],
    correct: "Who is Madonna?",
    dollar: "200"
  },
  {
    cat: "Music",
    answer:
      "The New Orleans International Airport is named for this famous jazz musician.",
    solution: [
      "Who is Dizzy Gillespie?",
      "Who is Louis Armstrong?",
      "Who is Billie Holiday?",
      "Who is Ivan Neville?"
    ],
    correct: "Who is Louis Armstrong?",
    dollar: "400"
  },
  {
    cat: "Music",
    answer:
      "This is the recommended drying or 'seasoning' time for wood used to make a violin.",
    solution: [
      "What is 10 weeks?",
      "What is 10 days?",
      "What is 10 years?",
      "What is 10 months?"
    ],
    correct: "What is 10 years?",
    dollar: "600"
  },
  {
    cat: "Music",
    answer: "Buddy Holly crashed and died while on this airplane.",
    solution: [
      "What is the American Pie?",
      "What is the Enola Gay?",
      "What is the Spirit of St.Louis?",
      "What is the Scarlet Falcon?"
    ],
    correct: "What is the American Pie?",
    dollar: "800"
  },
  {
    cat: "Music",
    answer:
      "This band was originally named Tony Flow and the Miraculously Majestic Masters of Mayhem.",
    solution: [
      "Who is Metallica?",
      "Who is the Red Hot Chili Peppers?",
      "Who is Pearl Jam?",
      "Who is Slayer?"
    ],
    correct: "Who is the Red Hot Chili Peppers?",
    dollar: "1000"
  },
  {
    cat: "Film",
    answer:
      "This character in Monty Python and the Holy Grail insists that 'It's just a flesh wound'.",
    solution: [
      "Who is Sir Lancelot?",
      "Who is King Arthur?",
      "Who is the Black Knight?",
      "Who is Roger the Shrubber?"
    ],
    correct: "Who is the Black Knight?",
    dollar: "200"
  },
  {
    cat: "Film",
    answer:
      "The only Top Gun actor who didn't vomit while in the fighter jets.",
    solution: [
      "Who is Tom Cruise?",
      "Who is Val Kilmer?",
      "Who is John Stockwell?",
      "Who is Anthony Edwards?"
    ],
    correct: "Who is Anthony Edwards?",
    dollar: "400"
  },
  {
    cat: "Film",
    answer:
      "In The Wizard of Oz (1939), this was used to simulate snow during the poppy scene.",
    solution: [
      "What is asbestos?",
      "What is corn flakes?",
      "What is coconut flakes?",
      "What is powdered sugar?"
    ],
    correct: "What is asbestos?",
    dollar: "600"
  },
  {
    cat: "Film",
    answer: "A flushing toilet was first shown in this imfamous horror film.",
    solution: [
      "What is Texas Chainsaw Massacre?",
      "What is A Nightmare on Elm Street?",
      "What is Psycho?",
      "What is Amityville Horror?"
    ],
    correct: "What is Psycho?",
    dollar: "800"
  },
  {
    cat: "Film",
    answer:
      "In The Martian, this is where the Mars exterior scenes were shot .",
    solution: [
      "What is Namibia?",
      "What is Israel?",
      "What is Australia?",
      "What is Jordan?"
    ],
    correct: "What is Jordan?",
    dollar: "1000"
  },
  {
    cat: "Sports",
    answer: "The team that won the 2019 SEC Championship game.",
    solution: [
      "What is Louisiana State University?",
      "What is University of Alabama?",
      "What is University of Georgia?",
      "What is Auburn University?"
    ],
    correct: "What is Louisiana State University?",
    dollar: "200"
  },
  {
    cat: "Sports",
    answer:
      "The New England Patriots have one the Super Bowl this many times since 2001.",
    solution: ["What is 6?", "What is 5?", "What is 7?", "What is 4?"],
    correct: "What is 6?",
    dollar: "400"
  },
  {
    cat: "Sports",
    answer:
      "The only person in NBA history to be named Most Valuable Player, Coach of the Year, and Executive of the Year.",
    solution: [
      "Who is Larry Bird?",
      "Who is Michael Jordan?",
      "Who is Phil Jackson?",
      "Who is Bill Russell?"
    ],
    correct: "Who is Larry Bird?",
    dollar: "600"
  },
  {
    cat: "Sports",
    answer: "The country that won the first World Cup.",
    solution: [
      "What is England?",
      "What is Brazil?",
      "What is Argentina?",
      "What is Uruguay?"
    ],
    correct: "What is Uruguay?",
    dollar: "800"
  },
  {
    cat: "Sports",
    answer:
      "He was Cleveland Indians catcher Harry Chiti was traded for in 1962.",
    solution: [
      "Who is himself?",
      "Who is Mike Piazza?",
      "Who is Yogi Berra?",
      "Who is Johnny Mathis?"
    ],
    correct: "Who is himself?",
    dollar: "1000"
  },
  {
    cat: "Art",
    answer: "He is considered the father of Impressionism.",
    solution: [
      "Who is Monet?",
      "Who is Manet?",
      "Who is Salvidor Dali?",
      "Who is Picasso?"
    ],
    correct: "Who is Monet?",
    dollar: "200"
  },
  {
    cat: "Art",
    answer: "He painted the Mona Lisa.",
    solution: [
      "Who is Da Vinci?",
      "Who is Michaelangelo?",
      "Who is Donatello?",
      "Who is Raphael?"
    ],
    correct: "Who is Da Vinci?",
    dollar: "400"
  },
  {
    cat: "Art",
    answer: "This artist is best known for a painting of his mother.",
    solution: [
      "Who is Whistler?",
      "Who is Goya?",
      "Who is Renoir?",
      "Who is Rembrandt?"
    ],
    correct: "Who is Whistler?",
    dollar: "600"
  },
  {
    cat: "Art",
    answer: "Actor James Franco once sold a sculpture made of this.",
    solution: [
      "What is air?",
      "What is water?",
      "What is dryer lint?",
      "What is cigarette butts?"
    ],
    correct: "What is air?",
    dollar: "800"
  },
  {
    cat: "Art",
    answer:
      "The number of paintings Vincent Van Gogh sold during his lifetime.",
    solution: ["What is 227?", "What is 54?", "What is 1?", "What is none?"],
    correct: "What is 1?",
    dollar: "1000"
  }
];
let score = 0;
let score1 = document.querySelector(".score");
for (let i = 0; i < 36; i++) {
  let gameBoard = document.createElement("div");
  let categories = ["Food", "Science", "Music", "Film", "Sports", "Art"];
  gameBoard.classList.add("hidden");
  gameBoard.setAttribute("data-target", "#exampleModal");
  gameBoard.setAttribute("data-toggle", "modal");
  if (i >= 6 && i < 12) {
    gameBoard.textContent = "$200";
    gameBoard.setAttribute(`data-dollar`, "200");
  } else if (i >= 12 && i < 18) {
    gameBoard.textContent = "$400";
    gameBoard.setAttribute(`data-dollar`, "400");
  } else if (i >= 18 && i < 24) {
    gameBoard.textContent = "$600";
    gameBoard.setAttribute(`data-dollar`, "600");
  } else if (i >= 24 && i < 30) {
    gameBoard.textContent = "$800";
    gameBoard.setAttribute(`data-dollar`, "800");
  } else if (i >= 30 && i < 36) {
    gameBoard.textContent = "$1000";
    gameBoard.setAttribute(`data-dollar`, "1000");
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
    gameBoard.setAttribute(`data-cat`, `Sports`);
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
        this.classList.add("invisible");
      }
    }
  });
}
let submit = document.querySelector(".btn-primary");
submit.setAttribute("data-dismiss", "modal");

submit.addEventListener("click", function() {
  let solutionCheck = document.querySelector(
    `input[name= "exampleRadios"]:checked`
  ).nextElementSibling.textContent;
  let clicked = document.querySelectorAll(`.invisible`);

  for (let i = 0; i < questions.length; i++) {
    if (solutionCheck === questions[i].correct) {
      score += parseInt(questions[i].dollar);
      score1.textContent = score;
      console.log(clicked);
      if (score1.textContent >= 5000) {
        alert("you won");
        return null;
      } else if (score1.textContent < 5000 && clicked.length === 30) {
        alert("you lose");
      }
    }
  }
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
