import React, { useState, useEffect } from 'react';
import Row from './Row.jsx';
import Piece from './Piece.jsx';

const Board = (props) => {
  const { boardsize } = props;
  const [board, setBoard] = useState([]);
  const rowArray = createRows(boardsize);

  // useEffect(() => {

  // }, [boardsize]);

  function createRows(boardsize) {
    const rowArr = [];
    for (let i = 1; i <= boardsize; i++) {
      rowArr.push(<Row id={i} boardsize={boardsize} />);
    }
    return rowArr;
  }

  return (
    <div className='board'>
      <p>This is the boardsize: {boardsize}</p>
      {rowArray}
    </div>
  );
};

export default Board;
