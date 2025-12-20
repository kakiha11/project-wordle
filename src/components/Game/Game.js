import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameWon, setGameWon] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);

  const handleNewGuess = (guess) => {
    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };

    setGuesses([...guesses, newGuess]);

    const clues = checkGuess(guess, answer);
    const win = clues && clues.every((clue) => clue.status === "correct");
    if (win) {
      setGameWon(true);
    }

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1 && !win) {
      setGameOver(true);
    }
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput
        handleNewGuess={handleNewGuess}
        gameOver={gameOver}
        gameWon={gameWon}
        answer={answer}
        guesses={guesses}
      />
    </>
  );
}

export default Game;
