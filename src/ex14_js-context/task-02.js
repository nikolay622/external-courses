class Hangman {
  createGame(word) {
    this.word = word.split('');
    // eslint-disable-next-line no-unused-vars
    this.visibleWord = this.word.map((_) => ('_'));
    this.try = 6;
    this.errorLetters = [];
  }

  constructor(word) {
    this.createGame(word);
  }

  guess(letter) {
    if (this.try === 0) {
      return 'Game over';
    }

    let result = false;

    this.word.forEach((wordLetter, index) => {
      if (wordLetter.toLowerCase() === letter.toLowerCase()) {
        this.visibleWord[index] = wordLetter;
        result = true;
      }
    });

    if (this.word.join('') === this.getGuessedString()) {
      return `Winner! [${this.getGuessedString()}]`;
    }

    if (result) {
      return this.getGuessedString();
    }

    this.try -= 1;
    this.errorLetters.push(letter);

    return this.getStatus();
  }

  startAgain(word) {
    this.createGame(word);
  }

  getGuessedString() {
    return this.visibleWord.join('');
  }

  getErrorsLeft() {
    return this.try;
  }

  getWrongSymbols() {
    return this.errorLetters;
  }

  getStatus() {
    return `Wrong letter, errors left ${this.try} | ${this.errorLetters.join(', ')}`;
  }
}
const game = new Hangman('');
module.exports = game;
