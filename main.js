var word = require('./word.js');
var game = require('./game.js');

var prompt = require('prompt');

prompt.start();

game = {

   wordBank :["mantle", "ruth", "yogi", "jeter"];
   wordsWon : 0,
   guessesRemaining : 10,
   guessedLetters: [],
   currentWrd : null,

}