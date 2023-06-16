import {Dispatch, FC, SetStateAction} from "react";

interface ISearchManufacturer {
  manufacturer: string,
  setManufacturer:  Dispatch<SetStateAction<string>>
}

export const SearchManufacturer:FC<ISearchManufacturer> = ({manufacturer, setManufacturer}) => {
  return <></>
}