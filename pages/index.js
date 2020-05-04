import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Board from './components/Board.jsx';

const App = () => {
  const [boardsize, setBoardsize] = useState(8);
  const [boardsizeInput, setBoardsizeInput] = useState('');

  useEffect(() => {
    console.log(boardsize);
    console.log(typeof boardsize);
  });

  function handleBoardsizeChange(e) {
    e.preventDefault();
    setBoardsize(parseInt(boardsizeInput));
    setBoardsizeInput('');
  }

  function handleBoardsizeInputChange(e) {
    e.preventDefault();
    setBoardsizeInput(e.target.value);
  }

  return (
    <div>
      <Head>
        <title>Checkerboard</title>
      </Head>
      <Board boardsize={boardsize} />
      <form id='boardsizeForm' onSubmit={handleBoardsizeChange}>
        <label>Set Boardsize</label> <br />
        <input
          type='text'
          id='boardsizeInput'
          onChange={handleBoardsizeInputChange}
          value={boardsizeInput}
        ></input>
        <input type='submit' value='submit'></input>
      </form>
    </div>
  );
};

export default App;
