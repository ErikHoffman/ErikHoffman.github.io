var suitesChars = ['S','C','H','D'];
var numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var deck = [];

var wins = 0;

var piles = [];

var suitesPrinted = 0;

var elementNames = [
  'suiteOne',
  'suiteTwo',
  'suiteThree',
  'suiteFour'
];

/*
 * Piles represent the piles you begin with on the left
 * Suites are the piles you build using matching cards from previous suites
 *
*/
var suites = [];
    stack = [];
    stackFlipped = [];

function cardClass(info) {
  this.suite = info.suite;
  this.number = info.number;
}

function resetGame() {
  deck = [];
  piles = [];
  suites = [];
  for(i = 0; i < 4; i++) {
    suites[i] = [];
    var test = elementNames[i];
    var suiteNode = document.getElementById(elementNames[i]);
    while(suiteNode.firstChild) {
      suiteNode.removeChild(suiteNode.firstChild);
    }
  }
  stackFlipped = [];
  suitesPrinted = 0;
}

function shuffle() {
  var count = deck.length,
      randomnumber,
      temp;
  while( count ){
    randomnumber = Math.random() * count-- | 0;
    temp = deck[count];
    deck[count] = deck[randomnumber];
    deck[randomnumber] = temp;
  }
}

function placeFromPile(pile) {
  /*Try pile one*/
  outOfMoves = false;
  while(pile.length > 0) {
    var popped = false;

    var check = false;

    //Suite One
    if(pile[pile.length-1].suite === suites[0][0].suite) {
      suites[0].push(pile.pop());
      popped = true;
    }
    else {
      for(i = 0; i < suites[0].length; i++) {
        if(pile[pile.length-1].number === suites[0][i].number) {
          check = true;
        }
      }
    }

    //Suite Two
    //We want check to be true as if the number didn't exist in the top suite we can't try it below
    if((check === true) && (popped === false)) {
      check = false;
      if(suites[1].length === 0) {
        suites[1].push(pile.pop());
        popped = true;
      }
      else if(pile[pile.length-1].suite === suites[1][0].suite) {
        suites[1].push(pile.pop());
        popped = true;
      }
      else {
        check = numberMatch(pile[pile.length-1], suites[1]); /*If the card's number was in this suitepile we can check the next one*/
      }
    }
    //Suite Three
    if((check === true) && (popped === false)) {
      check = false;
      if(suites[2].length === 0) {
        suites[2].push(pile.pop());
        popped = true;
      }
      else if(pile[pile.length-1].suite === suites[2][0].suite) {
        suites[2].push(pile.pop());
        popped = true;
      }
      else {
        check = numberMatch(pile[pile.length-1], suites[2]); /*Again, make sure the card that can't be placed in this suite did have a number match*/
      }
    }
    //Suite Four
    if((check === true) && (popped === false)) {
      if(suites[3].length === 0) {
        suites[3].push(pile.pop());
        popped = true;
      }
      else if(pile[pile.length-1].suite === suites[3][0].suite) {
        suites[3].push(pile.pop());
        popped = true;
      }
    }

    //We are done placing cards because the top one won't go anywhere, return and move to next pile in cycle
    if(popped === false) {
      return {placed: false, pile: pile};
    }

  }

  //If the while loop finishes then the pile we are looking at is out of cards and we can move to the next
  return {placed: true, pile: pile}; //Had to place if made it out of loop
}

/*Number match makes sure the number you are trying to add to a suite exists in the suites above it*/
function numberMatch(card, suite) {
  for(i = 0; i < suite.length; i++) {
    if(card.number === suite[i].number) {
      return true;
    }
  }
  return false;
}

function countSuites() {
  return (suites[1].length +
          suites[1].length +
          suites[2].length +
          suites[3].length);
}

function runGame() {

  for(x = 0; x < 100; x++) {

    document.getElementById('gameCounter').innerHTML = '' + (x+1);
    resetGame();
    /*Create the deck*/
    for (j = 0; j < suitesChars.length; j++) {
      for(k = 0; k < numbers.length; k++) {
        var card = new cardClass({suite:suitesChars[j], number:numbers[k]});
        deck.push(card);
      }
    }
    shuffle(deck);

    for(j = 0; j < 4; j++) {
      piles[j] = [];
      piles[0].push(deck.pop());
      if(j > 0) {piles[1].push(deck.pop());}
      if(j > 1) {piles[2].push(deck.pop());}
      if(j > 2) {piles[3].push(deck.pop()); suites[0].push(deck.pop());} /*Place a single card in suite one to start the game*/
    }


    var victory = true;
    var placeCheck;
    var wincheck = countSuites();

    while(wincheck <= 51) {
      for(j = 0; j < 5; j++) {
        if(j < 4) {
          placeCheck = placeFromPile(piles[j]);
          piles[j] = placeCheck.pile;
        }
        else {
          placeCheck = placeFromPile(deck);
          deck = placeCheck.pile;
          if(!placeCheck.placed) {
            stackFlipped.push(deck.pop());
          }
          placeCheck = placeFromPile(stackFlipped);
          stackFlipped = placeCheck.pile;
        }
      }
      if(deck.length === 0 && ( (countSuites()) < 52) ) {
        victory = false;
        break;
      }
    }

    wincheck = countSuites();

    if(victory) {
      wins++;
      document.getElementById('winloss').innerHTML = '' + wins + 'WINS';
    }
  }

  if(countSuites() > 40) {
    for(s = 0; s < 4; s++) {
      if(suites[s].length > 0) {
        appendCardElement(s,elementNames[s],true);
      }
    }
  }
}

function appendCardElement(suiteNum, suiteStr, endGame) {
  var suiteChar = suites[suiteNum][suitesPrinted].suite;
  var suiteElem;
  if(endGame) {
    for(i = 0; i < suites[suiteNum].length; i++) {
      suiteElem = document.createElement('img');
      suiteElem.setAttribute('style', 'height:100px');
      suiteElem.setAttribute('src', 'Vector-Playing-Cards-master/cards-svg/' + suites[0][i].number + suiteChar + '.svg');
      document.getElementById(suiteStr).appendChild(suiteElem);
    }
  }
  else {
    for(i = 0; i < numbers.length; i++) {
      suiteElem = document.createElement('img');
      suiteElem.setAttribute('style', 'height:100px');
      suiteElem.setAttribute('src', 'Vector-Playing-Cards-master/cards-svg/' + suites[0][i].number + suiteChar + '.svg');
      document.getElementById(suiteStr).appendChild(suiteElem);
    }
  }
}
