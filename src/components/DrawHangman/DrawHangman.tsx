import React, { memo } from 'react';
import './DrawHangman.scss';

const head = <div key="1" className="head" />;
const corpse = <div key="2" className="body-part corpse" />;
const rightArm = <div key="3" className="body-part arm arm--right" />;
const leftArm = <div key="4" className="body-part arm arm--left" />;
const rightLeg = <div key="5" className="body-part leg leg--right" />;
const leftLeg = <div key="6" className="body-part leg leg--left" />;

export const DrawHangman: React.FC = memo(() => {
  const skeleton = [head, corpse, rightArm, leftArm, rightLeg, leftLeg];

  return (
    <>
      {skeleton}
    </>
  );
});
