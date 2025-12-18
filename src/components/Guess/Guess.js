import React from "react";
import { range } from "../../utils";

function Guess({ row, word }) {
  return (
    <p className="guess">
      {range(5).map((columnIndex) => (
        <span key={`row${row}-col${columnIndex}`} className="cell">
          {word[columnIndex]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
