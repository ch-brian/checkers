import React, { useState, useEffect } from 'react';
import Row from './Row.jsx';

const Board = (props) => {
  const { boardsize } = props;
  const [board, setBoard] = useState(setBoardState());
  const [selectedPiece, setSelectedPiece] = useState();

  function createRows(boardsize) {
    const rowArr = [];
    for (let i = 0; i < boardsize; i++) {
      rowArr.push(
        <Row
          id={i}
          boardsize={boardsize}
          rowState={board[i]}
          selectedPiece={selectedPiece}
          setSelectedPiece={setSelectedPiece}
        />
      );
    }
    return rowArr;
  }

  function setBoardState() {
    const boardState = [];
    for (let i = 0; i < boardsize; i++) {
      if (i <= 1) {
        const rowState = [];
        for (let j = 0; j < boardsize; j++) {
          rowState.push('red');
        }
        boardState.push(rowState);
      } else if (i >= boardsize - 2) {
        const rowState = [];
        for (let j = 0; j < boardsize; j++) {
          rowState.push('black');
        }
        boardState.push(rowState);
      } else {
        const rowState = [];
        for (let j = 0; j < boardsize; j++) {
          rowState.push('neutral');
        }
        boardState.push(rowState);
      }
    }
    return boardState;
  }

  const rowArray = createRows(boardsize);
  console.log('this is selected piece; ', selectedPiece);

  return (
    <div className='board'>
      <p>This is the boardsize: {boardsize}</p>
      {rowArray}
      <form>
        <input type='radio'></input>
      </form>
    </div>
  );
};

export default Board;
