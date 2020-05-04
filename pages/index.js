import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const App = () => {
  const [boardsize, setBoardsize] = useState(8);
  const [boardsizeInput, setBoardsizeInput] = useState(0);

  useEffect(() => {
    console.log(boardsize);
  });

  function handleBoardsizeChange(e) {
    e.preventDefault();
    setBoardsize(boardsizeInput);
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
      <form id='boardsizeForm' onSubmit={handleBoardsizeChange}>
        <input
          type='text'
          id='boardsizeInput'
          onChange={handleBoardsizeInputChange}
        ></input>
        <input type='submit' value='submit'></input>
      </form>
    </div>
  );
};

export default App;
