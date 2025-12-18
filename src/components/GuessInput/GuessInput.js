import React from 'react';

function GuessInput({ handleNewGuess }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Process the form submission here
    handleNewGuess(inputValue);
    
    // Clear the input after submission
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your guess"
        required
        pattern="[A-Za-z]{5}"
        title="Please enter exactly 5 letters."
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;