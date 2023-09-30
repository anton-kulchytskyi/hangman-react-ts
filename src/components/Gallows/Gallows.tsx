import React, { memo } from 'react';
import './Gallows.scss';
import { DrawHangman } from '../DrawHangman';

export const Gallows: React.FC = memo(() => {
  return (
    <div className="gallows">
      <div className="gallows__part gallows__part--top-short" />
      <div className="gallows__part gallows__part--top" />
      <div className="gallows__part gallows__part--vertical" />
      <div className="gallows__part gallows__part--base" />
      <DrawHangman />
    </div>
  );
});
