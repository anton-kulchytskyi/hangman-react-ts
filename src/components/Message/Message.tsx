import React, { memo } from 'react';

type Props = {
  hint: string;
  isLose: boolean;
  isWin: boolean;
  isHintVisible: boolean,
  setIsHintVisible: (isHintVisible: boolean) => void,
};

export const Message: React.FC<Props> = memo(
  ({
    hint,
    isLose,
    isWin,
    isHintVisible,
    setIsHintVisible,
  }) => {
    return (
      <>
        {!isHintVisible && !isLose && !isWin ? (
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
        )}
      </>
    );
  },
);
