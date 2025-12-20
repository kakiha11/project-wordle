import React from "react";

function EndGameBanner({ gameWon, answer, guesses }) {
  const mood = gameWon ? "happy" : "sad";
  return (
    <div className={`${mood} banner`}>
      {gameWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses.length} guesses</strong>
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      )}
    </div>
  );
}

export default EndGameBanner;
