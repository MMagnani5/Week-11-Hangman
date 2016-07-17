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

   startGame : function(wrd){
    this.resetGuessRemaining();
    this.currentWrd = new Word.Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
    this.currentWrd.getLets();
    console.log("welcome to Yankee Hangman \nGuess from some great Hall of Famers");
    console.log(this.currentWrd.wordRender() + '\n');
    this.keepPromptingUser();
  },

  keepPromptingUser: function(){
    var self = this;
    prompt.get(['guessedLetter'], function(err, result){
      console.log("");
      console.log('The you picked is' + result.guessedLetter);

      var findUserGuess = self.currentWrd.checkLetterFound(result.guessedLetter);
           if (findUserGuess === 0){
            if (self.guessedLetters.indexOf(result.guessLetter) < 0) {
              self.guessedLetters.push(result.guessLetter);
              self.guessesRemaining--;
              console.log("You guessed a wrong letter!");
          } else {
            console.log("You picked that letter already");
        }
      }else{

            if (self.guessedLetters.indexOf(result.guessLetter) < 0) {
              self.guessedLetters.push(result.guessLetter);
              console.log('You guessed right!');
            } else {
              console.log('Already guessed that letter');
            }
            if (self.currentWrd.FindTheWord()) {
              console.log('You Won!' + self.currentWrd.word);
             
              return;
            }
          }

        console.log('Guesses remaining: ', self.guessesRemaining);
        console.log(self.currentWrd.wordRender());
        console.log("");
        console.log('Letters already guessed: ' + self.guessedLetters);


        if ((self.guessesRemaining > 0) && (self.currentWrd.found === false)){
          self.keepPromptingUser();
        } else if(self.guessesRemaining === 0){
            console.log('You lost!', self.currentWrd.word);
            
        } else{
            console.log(self.currentWrd.wordRender());
        }
    });
  }
}

  