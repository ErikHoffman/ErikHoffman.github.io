var suites = ['Spade','Club','Heart','Diamond'];
var numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var deck = [];

var wins = 0;

var piles = [];

/*
 * Piles represent the piles you begin with on the left
 * Suites are the piles you build using matching cards from previous suites
 *
*/
var suiteOne = [],
    suiteTwo = [],
    suiteThree = [],
    suiteFour = [],
    stack = [];
    stackFlipped = [];

function cardClass(info) {
  this.suite = info.suite;
  this.number = info.number;
}

function resetGame() {
  deck = [];
  piles = [];
  suiteOne = [];
  suiteTwo = [];
  suiteThree = [];
  suiteFour = [];
  stackFlipped = [];
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
    if(pile[pile.length-1].suite === suiteOne[0].suite) {
      suiteOne.push(pile.pop());
      popped = true;
    }
    else {
      for(i = 0; i < suiteOne.length; i++) {
        if(pile[pile.length-1].number === suiteOne[i].number) {
          check = true;
        }
      }
    }

    //Suite Two
    if((check === true) && (popped === false)) {
      check = false;
      if(suiteTwo.length === 0) {
        suiteTwo.push(pile.pop());
        popped = true;
      }
      else if(pile[pile.length-1].suite === suiteTwo[0].suite) {
        suiteTwo.push(pile.pop());
        popped = true;
      }
      else {
        for(i = 0; i < suiteTwo.length; i++) {
          if(pile[pile.length-1].number === suiteTwo[i].number) {
            check = true;
          }
        }
      }
    }
    //Suite Three
    if((check === true) && (popped === false)) {
      check = false;
      if(suiteThree.length === 0) {
        suiteThree.push(pile.pop());
        popped = true;
      }
      else if(pile[pile.length-1].suite === suiteThree[0].suite) {
        suiteThree.push(pile.pop());
        popped = true;
      }
      else {
        for(i = 0; i < suiteThree.length; i++) {
          if(pile[pile.length-1].number === suiteThree[i].number) {
            check = true;
          }
        }
      }
    }
    //Suite Four
    if((check === true) && (popped === false)) {
      if(suiteFour.length === 0) {
        suiteFour.push(pile.pop());
        popped = true;
      }
      else if(pile[pile.length-1].suite === suiteFour[0].suite) {
        suiteFour.push(pile.pop());
        popped = true;
      }
    }
    if(popped === false) {
      return {placed: false, pile: pile};
    }
  }
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
  return (suiteOne.length +
          suiteTwo.length +
          suiteThree.length +
          suiteFour.length);
}

function runGame() {

  for(x = 0; x < 100000; x++) {

    document.getElementById('gameCounter').innerHTML = '' + (x+1);
    resetGame();
    /*Create the deck*/
    for (j = 0; j < suites.length; j++) {
      for(k = 0; k < numbers.length; k++) {
        var card = new cardClass({suite:suites[j], number:numbers[k]});
        //console.log(card);
        deck.push(card);
      }
    }
    shuffle(deck);
    //console.log(deck);

    for(j = 0; j < 4; j++) {
      piles[j] = [];
      piles[0].push(deck.pop());
      if(j > 0) {piles[1].push(deck.pop());}
      if(j > 1) {piles[2].push(deck.pop());}
      if(j > 2) {piles[3].push(deck.pop()); suiteOne.push(deck.pop());} /*Place a single card in suite one to start the game*/
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
      if(deck.length === 0 && ( (suiteOne.length + suiteTwo.length + suiteThree.length + suiteFour.length) < 52) ) {
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
}
