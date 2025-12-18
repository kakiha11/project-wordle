import React from 'react';



function GuessList({guesses}) {

  const guessElements = guesses.map((guess) => (
    <p key={guess.id} className='guess'>
      {guess.guess}
    </p>
  ));

  return <div className='guess-results'>
    {guessElements}
  </div>;
}

export default GuessList;
