import React from 'react'
import "./Trending.scss"

import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

function Trending({songCover, songName, singer}) {
    return (
        <div className='trending-music'>
            <img src={songCover} alt="img" />
            <MdOutlineMoreHoriz style={{ color: "#FCFCFF" }} className='dots'/>
            <div className="trending-music-player">
                <div>
                    <h3> {songName} </h3>
                    <span>
                        <FaMusic />
                        {singer}
                    </span>
                </div>
                <div className='play-button-con'>
                    <FaPlay className='play-button'/>
                </div>
            </div>
        </div>
    )
}

export default Trending