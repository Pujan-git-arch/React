import { useState } from 'react'
import './App.css'
import Square from './Square'
import Button from './Button'

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [savedGame, setSavedGame] = useState(null);

  function handleClick(i) {
    if (square[i] || calculateWinner(square)) return;

    const nextSquare = square.slice();
    nextSquare[i] = xIsNext ? "X" : "O";

    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  // NEW GAME
  function newGame() {
    setSquare(Array(9).fill(null));
    setXIsNext(true);
  }

  // RESET (same as new game)
  function resetGame() {
    newGame();
  }

  // SAVE GAME
  function saveGame() {
    setSavedGame({ square, xIsNext });
  }

  // CONTINUE GAME
  function continueGame() {
    if (savedGame) {
      setSquare(savedGame.square);
      setXIsNext(savedGame.xIsNext);
    }
  }

  const winner = calculateWinner(square);
  let status = winner 
    ? "Winner: " + winner 
    : "Next Player: " + (xIsNext ? "X" : "O");

  function calculateWinner(square) {
    const lines = [
      [0,1,2], [0,4,8], [2,4,6],
      [3,4,5], [6,7,8], [0,3,6],
      [1,4,7], [2,5,8]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="title">Tic-Tac-Toe</div>
      <div className='status'>{status}</div>

      <div className='board'>
        {square.map((val, i) => (
          <Square key={i} value={val} onSquareClick={() => handleClick(i)} />
        ))}
      </div>

      <Button 
        newGame={newGame}
        resetGame={resetGame}
        continueGame={continueGame}
        saveGame={saveGame}
      />
    </>
  )
}

export default App;
