import React, { memo } from 'react';
import classNames from 'classnames';
import { checkCh } from '../../utils/checkCh';
import './WordToGuess.scss';

type Props = {
  wordToGuess: string[];
  guessedLetters: string[];
  isLose: boolean;
};

export const WordToGuess: React.FC<Props> = memo(
  ({
    wordToGuess,
    guessedLetters,
    isLose,
  }) => {
    return (
      <>
        <div className="guess-letters">
          {wordToGuess.map((ch, index) => (
            <span className="guess-letters__underline">
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={classNames(
                  'guess-letters__hide',
                  {
                    'guess-letters__hide--target': checkCh(guessedLetters, ch),
                  },
                  {
                    'guess-letters__hide--lose':
                      !checkCh(guessedLetters, ch) && isLose,
                  },
                )}
              >
                {ch}
              </span>
            </span>
          ))}
        </div>
      </>
    );
  },
);
