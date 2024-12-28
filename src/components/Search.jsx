import React from 'react'
import "./Search.scss"

import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <div className='search-con'>
            <CiSearch style={{color: "#C4C4C4", fontSize: "2rem"}}/>
            <input type="search" placeholder='Search'/>
        </div>
    )
}

export default Search