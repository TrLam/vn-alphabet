import React from 'react';
import Letter from 'src/Letter';
import LetterInsight from 'src/LetterInsight';
import { ALPHABET } from 'src/constants/alphabet';

const Alphabet = () => {
  return (
    <>
      <div className="grid gap-5 grid-cols-5">
        {Object.keys(ALPHABET).map((letter) => (
          <Letter letter={letter} />
        ))}
      </div>
      <LetterInsight letter="l" example={ALPHABET.l} />
    </>
  );
};

export default Alphabet;
