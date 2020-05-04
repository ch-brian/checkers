import React from 'react';
import Box from './Box.jsx';

const Row = (props) => {
  const { boardsize, id } = props;
  const boxColor = 'box--black';
  const boxArray = createBoxes(boardsize);

  function createBoxes(boardsize) {
    const boxArr = [];
    if (id % 2 === 0) {
      for (let i = 1; i <= boardsize; i++) {
        const value = [id, i];
        const boxColor = i % 2 === 0 ? 'box--black' : 'box--white';
        boxArr.push(<Box id={value} boxColor={boxColor} value={value} />);
      }
    } else {
      for (let i = 1; i <= boardsize; i++) {
        const value = [id, i];
        const boxColor = i % 2 === 0 ? 'box--white' : 'box--black';
        boxArr.push(<Box id={value} boxColor={boxColor} value={value} />);
      }
    }
    return boxArr;
  }

  createBoxes(boardsize);

  return <div className='row'>{boxArray}</div>;
};

export default Row;
