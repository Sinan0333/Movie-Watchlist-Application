import React, { useState } from 'react'
import './Banner.css'
import MovieDataModal from '../MovieDataModal/MovieDataModal';


function Banner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{backgroundImage:`url("/assets/images/banner.jpg")`}} className='banner'>
      <MovieDataModal showModal={showModal} setShowModal={setShowModal}/>
      <div className='content'>
        <h1 className='title'>hello world</h1>
        <h1 className='discription'>haai</h1>
        <br />
        <div className='banner-buttons'>
            <button className='banner-buttoon1' onClick={()=>setShowModal(!showModal)}>Add</button>
            <button className='banner-buttoon2'>More Info</button>
        </div>
      </div> 
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
