import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleNewGuess = (guess) => {
    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    
    setGuesses([...guesses, newGuess]);
    }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleNewGuess={handleNewGuess} />
    </>
  );
}

export default Game;
