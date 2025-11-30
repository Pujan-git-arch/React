function Button({ newGame, resetGame, continueGame, saveGame }) {
  return (
    <div className="button_wrapper">
      <button className="play_button" onClick={newGame}>New Game</button>
      <button className="play_button" onClick={continueGame}>Continue</button>
      <button className="play_button" onClick={saveGame}>Save Game</button>
      <button className="play_button reset" onClick={resetGame}>Reset</button>
    </div>
  );
}

export default Button;
