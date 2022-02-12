import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getLetterDataFromId } from 'src/constants/alphabet';
import NotFound from 'src/NotFound';

const LetterInsight = () => {
  const params = useParams();
  const currentId = params.letterId;
  const { letter, examples, prev, next } = getLetterDataFromId(currentId);
  const prevLetter = getLetterDataFromId(prev);
  const nextLetter = getLetterDataFromId(next);
  if (!letter) {
    return <NotFound />;
  }
  return (
    <div className="flex flex-col">
      <Link className="text-base" to="/">
        Back to the Alphabet
      </Link>
      <div className="flex flex-row">
        <Link to={`/${prev}`}>{prevLetter.letter}-</Link>
        <header className="text-red-600">{letter}</header>
        <Link to={`/${next}`}>- {nextLetter.letter}</Link>
      </div>
      <span className="text-red-600">Examples: {examples.join(', ')}</span>
    </div>
  );
};

export default LetterInsight;
