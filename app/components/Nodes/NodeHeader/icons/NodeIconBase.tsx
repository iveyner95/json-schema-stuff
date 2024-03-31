import React from "react"

const NODE_ICON_SIZE = "20px"

export const NodeIconBase = ({ children }: { children: React.JSX.Element }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={NODE_ICON_SIZE}
      height={NODE_ICON_SIZE}
      // TODO: handle darkmode
      fill="white"
    >
      {children}
    </svg>
  )
}