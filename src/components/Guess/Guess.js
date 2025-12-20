import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ row, word, answer }) {
  const clues = checkGuess(word, answer);
  return (
    <p key={`row${row}`} className="guess">
      {range(5).map((columnIndex) => (
        <span
          key={`row${row}-col${columnIndex}`}
          className={`cell${clues ? ` ${clues[columnIndex].status}` : ""}`}
        >
          {word[columnIndex]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
