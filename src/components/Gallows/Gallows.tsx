import React, { memo } from 'react';
import './Gallows.scss';
import { DrawHangman } from '../DrawHangman';

type Props = {
  numberOfGuesses: number
};

export const Gallows: React.FC<Props> = memo(({ numberOfGuesses }) => {
  return (
    <div className="gallows">
      <div className="gallows__part gallows__part--top-short" />
      <div className="gallows__part gallows__part--top" />
      <div className="gallows__part gallows__part--vertical" />
      <div className="gallows__part gallows__part--base" />
      <DrawHangman numberOfGuesses={numberOfGuesses} />
    </div>
  );
});
