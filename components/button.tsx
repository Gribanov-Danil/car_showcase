"use client"

import {FC, MouseEventHandler} from "react";

interface IButton {
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button:FC<IButton> = ({title, containerStyle, handleClick}) => {
  return (
      <button disabled={false} type={"button"} className={`custom-btn ${containerStyle}`} onClick={handleClick}>
          <span className="flex-1">{title}</span>
      </button>
  )
}