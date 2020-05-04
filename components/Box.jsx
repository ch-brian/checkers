import React from 'react';
import Piece from './Piece.jsx';

const Box = (props) => {
  const { boxColor, id, pieceState, selectedPiece, setSelectedPiece } = props;
  return (
    <div className={boxColor} id={JSON.stringify(id)}>
      {pieceState !== 'neutral' ? (
        <Piece
          id={id}
          pieceState={pieceState}
          selectedPiece={selectedPiece}
          setSelectedPiece={setSelectedPiece}
        />
      ) : null}
    </div>
  );
};

export default Box;
