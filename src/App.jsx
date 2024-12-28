import React from 'react'
import "./App.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import Trending from './components/Trending'
import Search from './components/Search'
import CategorySwitcher from './layouts/CategorySwitcher';

function App() {

  const { data: filterCat } = useQuery({
    queryKey: ["songs"],
    queryFn: () => axios.get("http://localhost:3000/songs").then(res => res.data)
  })



  return (
    <div>
      <Search />
      <div className="trending-con">
        <h1 className='trending-title'> Trending right now </h1>
        <div className="trending">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={100}
              freeMode={true}
              modules={[FreeMode]}
              className="category-swipers"
            >
              {filterCat?.map((item) => (
                <SwiperSlide>
                  <Trending songCover={item.songCover} songName={item.songName} singer={item.singer}/>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
      <div className="category-con">
       <CategorySwitcher/>
      </div>
    </div>
  )
}

export default App