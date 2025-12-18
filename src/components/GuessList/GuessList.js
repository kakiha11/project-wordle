import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ guesses, answer }) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} row={index} word={guesses[index] ? guesses[index].guess : ""} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
