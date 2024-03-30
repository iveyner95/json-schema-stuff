import { backgroundColorLM, borderRoundness, nodeWidth, textColorLM } from '@/tailwind-configs';
import React from "react";

export const NodeBox = ({ children }: { children: React.ReactNode; }) => {
  return (
    // Can some of these be defined higher up in the DOM?
    <div className={`p-3 ${nodeWidth} ${borderRoundness} ${backgroundColorLM} ${textColorLM}`}>
      {children}
    </div>
  );
};
