"use client"

import {SearchManufacturer} from "@/components/search-manufacturer";
import {useState} from "react";

export const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState("")
    const handleSearch = () => {
    }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>

            </div>
        </form>
    )
}