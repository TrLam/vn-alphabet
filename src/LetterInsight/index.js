import React from 'react';

const LetterInsight = (props) => {
  return (
    <div className="flex flex-row">
      <span>{props.letter}</span>
      <span>{props.example}</span>
    </div>
  );
};

export default LetterInsight;
