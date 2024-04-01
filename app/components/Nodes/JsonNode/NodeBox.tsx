import { backgroundColorLM, borderRoundness, dividedBorders, nodeWidth, textColorLM } from '@/tailwind-configs';
import React from "react";

export const NodeBox = ({ children }: { children: React.ReactNode; }) => {
  return (
    // Can some of these be defined higher up in the DOM?
    <div className={`${nodeWidth} ${borderRoundness} ${backgroundColorLM} ${textColorLM} ${dividedBorders}`}>
      {children}
    </div>
  );
};
