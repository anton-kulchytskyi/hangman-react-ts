import React, { memo } from 'react';
import classNames from 'classnames';
import { checkCh } from '../../utils/checkCh';
import './WordToGuess.scss';

type Props = {
  wordToGuess: string[];
  // hint: string;
  guessedLetters: string[];
  isLose: boolean;
  // isWin: boolean;
  // isHintVisible: boolean,
  // setIsHintVisible: (isHintVisible: boolean) => void,
};

export const WordToGuess: React.FC<Props> = memo(
  ({
    wordToGuess,
    // hint,
    guessedLetters,
    isLose,
    // isWin,
    // isHintVisible,
    // setIsHintVisible,
  }) => {
    return (
      <>
        <div className="guess-letters">
          {wordToGuess.map((ch, index) => (
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
          ))}
        </div>
        {/* {!isHintVisible ? (
          <label
            htmlFor="showHint"
            className="hint"
          >
            Need some help?
            {' '}
            <input
              type="checkbox"
              id="showHint"
              name="showHint"
              checked={isHintVisible}
              onChange={e => setIsHintVisible(e.target.checked)}
            />
          </label>
        ) : (
          !isLose && !isWin && <span className="hint">{hint}</span>
        )}
        {isLose && (
          <span className="hint">
            Oops, you lost! Please refresh to try again!
          </span>
        )}
        {isWin && (
          <span className="hint">
            Congrats! You won! Refresh for another try!
          </span>
        )} */}
      </>
    );
  },
);
