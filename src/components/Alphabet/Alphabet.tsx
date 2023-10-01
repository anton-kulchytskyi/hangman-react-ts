import React from 'react';
import classNames from 'classnames';

import { checkCh } from '../../utils/checkCh';

import './Alphabet.scss';

const buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type Props = {
  addGuessedLetter: (letter: string) => void;
  guessedLetters: string[];
  isActive: (letter: string) => boolean;
  isMissing: (letter: string) => boolean;
  isLose: boolean;
  isWin: boolean;
};

export const Alphabet: React.FC<Props> = ({
  addGuessedLetter,
  guessedLetters,
  isActive,
  isMissing,
  isLose,
  isWin,
}) => {
  return (
    <>
      <div className="alphabet">
        {buttons.map((letter) => (
          <button
            className={classNames(
              'alphabet__letter',
              { 'alphabet__letter--correct': isActive(letter) },
              { 'alphabet__letter--incorrect': isMissing(letter) },
            )}
            type="submit"
            key={letter}
            disabled={checkCh(guessedLetters, letter) || isLose || isWin}
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
