import React, { useState } from 'react'
import './Banner.css'
import MovieDataModal from '../MovieDataModal/MovieDataModal';


function Banner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{backgroundImage:`url("/assets/images/banner.jpg")`}} className='banner'>
      <MovieDataModal showModal={showModal} setShowModal={setShowModal}/>
      <div className='content'>
        <h1 className='title'>Movie Watch list Application</h1>
        <h1 className='discription'>The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management will be handled using Redux to ensure efficient and predictable state updates.</h1>
        <br />
        <div className='banner-buttons'>
            <button className='banner-buttoon1' onClick={()=>setShowModal(!showModal)}>Add Movie</button>
            <a href="https://github.com/Sinan0333/Movie-Watchlist-Application" target="_blank" rel="noreferrer"><button className='banner-buttoon2'>More Info</button></a>
        </div>
      </div> 
      {/* <div className="fade_bottom"></div> */}
    </div>
  )
}

export default Banner
