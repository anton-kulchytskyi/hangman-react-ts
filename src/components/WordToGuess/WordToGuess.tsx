import React, { memo } from 'react';
import './WordToGuess.scss';

type Props = {
  wordToGuess: string,
  hint: string,
  guessedLetters: string[],
};

export const WordToGuess: React.FC<Props> = memo(({
  wordToGuess,
  hint,
  guessedLetters,
}) => {
  return (
    <>
      <div className="guess-letters">
        {wordToGuess.split('').map((ch, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>{guessedLetters.includes(ch) ? ch : ''}</span>
        ))}
      </div>
      <span className="hint">{hint}</span>
    </>
  );
});
