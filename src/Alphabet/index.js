import React from 'react';
import { Link } from 'react-router-dom';

import Letter from 'src/Letter';
import { ALPHABET } from 'src/constants/alphabet';

const Alphabet = () => {
  return (
    <>
      <header className="text-white p-3">BẢNG CHỮ CÁI</header>
      <div className="grid gap-5 grid-cols-3 md:grid-cols-5">
        {ALPHABET.map((letterData) => (
          <Link to={`/${letterData.id}`} key={letterData.id}>
            <Letter letter={letterData.letter} />
          </Link>
        ))}
        <div className="bg-transparent border border-blue-500 rounded" />
      </div>
    </>
  );
};

export default Alphabet;
