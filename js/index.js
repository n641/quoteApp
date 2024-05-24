var Quotes = [
  {
    words: "Be yourself; everyone else is already taken.",
    name: " -- Oscar Wilde",
  },
  {
    words:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    name: " -- Marilyn Monroe",
  },
  {
    words: "So many books, so little time.",
    name: " -- Frank Zappa",
  },
  {
    words:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name: " -- Albert Einstein",
  },
  {
    words: "A room without books is like a body without a soul.",
    name: " -- Marcus Tullius Cicero",
  },
  {
    words:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    name: " -- Bernard M. Baruch",
  },
  {
    words:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    name: " -- Dr. Seuss",
  },
  {
    words: "You only live once, but if you do it right, once is enough.",
    name: " -- Mae West",
  },
  {
    words: "Be the change that you wish to see in the world.",
    name: " -- Mahatma Gandhi",
  },
  {
    words:
      "In three words I can sum up everything I've learned about life: it goes on.",
    name: " -- Robert Frost",
  },
];

var quoteElement = document.getElementById("text");

var previousNumber = -1;

function onClick() {
  var NextNumber = Math.floor(Math.random() * 10);
  if (NextNumber == previousNumber) {
    onClick();
  } else {
    quoteElement.innerHTML = ` 
     <h1 class="fs-2 my-4 fw-normal w-90 mx-auto" id="quote">
      "${Quotes[NextNumber].words}"
  </h1>
  <h1 id="name" class="d-inline-block fs-2  fw-normal">${Quotes[NextNumber].name}</h1>`;
    previousNumber = NextNumber;
  }
  console.log(NextNumber);
}
