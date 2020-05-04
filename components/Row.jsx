import React from 'react';
import Box from './Box.jsx';

const Row = (props) => {
  const { boardsize, id, rowState, selectedPiece, setSelectedPiece } = props;
  const boxColor = 'box--black';
  const boxArray = createBoxes(boardsize);

  function createBoxes(boardsize) {
    console.log('from row.jsx: ', [id, rowState]);
    const boxArr = [];
    if (id % 2 === 0) {
      for (let i = 0; i < boardsize; i++) {
        const value = [id, i];
        const boxColor = i % 2 === 0 ? 'box--black' : 'box--white';
        boxArr.push(
          <Box
            id={value}
            boxColor={boxColor}
            pieceState={rowState[i]}
            selectedPiece={selectedPiece}
            setSelectedPiece={setSelectedPiece}
          />
        );
      }
    } else {
      for (let i = 0; i < boardsize; i++) {
        const value = [id, i];
        const boxColor = i % 2 === 0 ? 'box--white' : 'box--black';
        boxArr.push(
          <Box id={value} boxColor={boxColor} pieceState={rowState[i]} />
        );
      }
    }
    return boxArr;
  }
  return <div className='row'>{boxArray}</div>;
};

export default Row;
