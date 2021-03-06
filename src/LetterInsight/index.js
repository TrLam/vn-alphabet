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
    <>
      <div className="flex flex-row place-content-between">
        <Link to={`/${prev}`}>{prevLetter.letter}</Link>
        <header className="text-red-600">{letter}</header>
        <Link to={`/${next}`}>{nextLetter.letter}</Link>
        <Link to="/">{'     <-'}</Link>
      </div>
      <span className="text-red-600 [text-shadow:0_0_5px_rgba(255,192,203,50%)]">
        {examples.join(', ')}
      </span>
    </>
  );
};

export default LetterInsight;
