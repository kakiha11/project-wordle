import React from "react";
import EndGameBanner from "../EndGameBanner/EndGameBanner";

function GuessInput({ handleNewGuess, gameWon, gameOver, answer, guesses }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process the form submission here
    handleNewGuess(inputValue);

    // Clear the input after submission
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  return (
    <>
      {gameOver || gameWon ? (
        <EndGameBanner
          gameWon={gameWon}
          answer={answer}
          guesses={guesses}
        />
      ) : null}
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your guess"
          disabled={gameWon || gameOver}
          required
          pattern="[A-Za-z]{5}"
          title="Please enter exactly 5 letters."
          minLength={5}
          maxLength={5}
        />
      </form>
    </>
  );
}

export default GuessInput;
