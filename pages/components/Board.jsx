import React, { useState } from 'react';
import Row from './Row.jsx';

const Board = (props) => {
  const { boardsize } = props;
  return (
    <div>
      <p>This is the boardsize: {boardsize}</p>
    </div>
  );
};

export default Board;
