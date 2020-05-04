import React from 'react';

const Box = (props) => {
  const { boxColor } = props;
  return <div className={boxColor}></div>;
};

export default Box;
