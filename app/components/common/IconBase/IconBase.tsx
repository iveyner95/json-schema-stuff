import React from 'react';

export interface IconBaseProps {
  size?: string;
  fill?: string;
  children: React.JSX.Element;
}

export const IconBase = ({ size = '20px', fill = 'white', children }: IconBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      // TODO: handle darkmode
      fill={fill}
    >
      {children}
    </svg>
  );
};
