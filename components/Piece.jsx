import React from 'react';

const Piece = (props) => {
  const { pieceColor } = props;
  return <div className={pieceColor}></div>;
};

export default Piece;
