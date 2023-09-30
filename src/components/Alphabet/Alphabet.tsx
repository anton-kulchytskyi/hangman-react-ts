import React from 'react';

const buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type Props = {
  addGuessedLetter: (letter: string) => void
};

export const Alphabet: React.FC<Props> = ({
  addGuessedLetter,
}) => {
  return (
    <>
      <div className="Alphabet">
        {buttons.map((letter) => (
          <button
            type="submit"
            key={letter}
            onClick={() => {
              addGuessedLetter(letter);
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  );
};
