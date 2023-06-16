"use client"

import {FC, MouseEventHandler} from "react";

interface IButton {
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit"
}

export const Button:FC<IButton> = ({title, containerStyle, handleClick, btnType}) => {
  return (
      <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyle}`} onClick={handleClick}>
          <span className="flex-1">{title}</span>
      </button>
  )
}