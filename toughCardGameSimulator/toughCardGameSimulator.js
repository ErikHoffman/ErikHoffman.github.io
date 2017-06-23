function cardClass(info) {
  this.suite = info.suite;
  this.number = info.number;
}

function shuffle(deck) {
  var count = deck.length,
      randomnumber,
      temp;
  while( count ){
    randomnumber = Math.random() * count-- | 0;
    temp = deck[count];
    deck[count] = deck[randomnumber];
    deck[randomnumber] = temp
  }
  return deck;
}

var suites = ['Spade','Club','Heart','Diamond'];
var numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function placeFromFourPile(pile,suite) {

}

function numberMatch(card, suite) {
  for(i = 0; i < suite.length; i++) {
    if(card.number === suite[i].number) {
      return true;
    }
  }
  return false;
}

function runGame() {
  var deck = [];
  for (i = 0; i < suites.length; i++) {
    for(j = 0; j < numbers.length; j++) {
      var card = new cardClass({suite:suites[i], number:numbers[j]});
      console.log(card);
      deck.push(card);
    }
  }
  deck = shuffle(deck);
  console.log(deck);

  var pileOne = [],
      pileTwo = [],
      pileThree = [],
      pileFour = [],
      suiteOne = [],
      suiteTwo = [],
      suiteThree = [],
      suiteFour = [],
      stack = [];
      
  for(i = 0; i < 4; i++) {
    pileOne.push(deck.pop());
    if(i > 0) {pileTwo.push(deck.pop());}
    if(i > 1) {pileThree.push(deck.pop());}
    if(i > 2) {pileFour.push(deck.pop()); suiteOne.push(deck.pop());}
  }

  var victory = false;
  while((suiteOne.length + suiteTwo.length +
    suiteThree.length + suiteFour.length) < 52) {

      /*Try pile one*/
      outOfMoves = false;
      while(outOfMoves === false || pileOne.length > 0) {
        var popped = false;
        if(suiteOne.length > 0) {
          if(pileOne[pileOne.length].suite === suiteOne[0].suite) {
            suiteOne.push(pileOne.pop());
            popped = true;
          }
        }
        if(popped === false && suiteTwo.length > 0) {
          if((pileOne[pileOne.length].suite === suiteTwo[0].suite)
            && (numberMatch(pileOne[pileOne.length],suiteOne)) {
            suiteTwo.push(pileOne.pop());
            popped = true;
          }
        }
        if(popped === false && suiteThree.length > 0) {
          if(pileOne[pileOne.length].suite === suiteThree[0].suite)
            && (numberMatch(pileOne[pileOne.length],suiteOne)
            && (numberMatch(pileOne[pileOne.length],suiteTwo)) {
            suiteThree.push(pileOne.pop());
            popped = true;
          }
        }
        if(popped === false && suiteFour.length > 0) {
          if(pileOne[pileOne.length].suite === suiteFour[0].suite)
            && (numberMatch(pileOne[pileOne.length],suiteOne)
            && (numberMatch(pileOne[pileOne.length],suiteTwo)
            && (numberMatch(pileOne[pileOne.length],suiteThree)) {
            suiteFour.push(pileOne.pop());
            popped = true;
          }
        }
        if(popped === false) {
          outOfMoves = true;
        }
      }

      if(pileTwo.length > 0) {

      }










  }




}
