import React from 'react';

const Piece = (props) => {
  const { pieceState, selectedPiece, setSelectedPiece, id } = props;
  const pieceColor = pieceState === 'red' ? 'piece--red' : 'piece--black';
  // console.log('id vs selectedpiece', [id, selectedPiece]);
  let piece = renderPiece();
  function renderPiece() {
    if (JSON.stringify(selectedPiece) === JSON.stringify(id)) {
      return (
        <button
          className={pieceColor}
          onClick={(e) => {
            e.preventDefault();
            setSelectedPiece(id);
          }}
          style='background-color:blue'
        ></button>
      );
    } else {
      return (
        <button
          className={pieceColor}
          onClick={(e) => {
            e.preventDefault();
            setSelectedPiece(id);
          }}
        ></button>
      );
    }
  }

  return piece;
};

export default Piece;
