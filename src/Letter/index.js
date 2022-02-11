import React from 'react';

const Letter = (props) => {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-6 border border-blue-500 hover:border-transparent rounded">
      {props.letter.toUpperCase()} {props.letter.toLowerCase()}
    </button>
  );
};

export default Letter;
