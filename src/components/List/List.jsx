import React from 'react'
import './List.css'
import { useSelector } from 'react-redux'

function List() {
  const data = useSelector((state)=> state.movies)

  return (

    <div className='list'>
      {
        data.map((movie)=>{
          return (
            <div key={movie.id} className='card'>
              <div className='card-buttons-container'>
                <div className='card-button'>
                  <img src="/assets/icons/edit.png" alt="Edit" />
                </div>
                <div className='card-button'>
                  <img src="/assets/icons/edit.png" alt="delete" />
                </div>
                <div className='card-button'>
                  <img src="/assets/icons/edit.png" alt="Add review" />
                </div>
              </div>
             
              <img  className='card-img' src={movie.image} alt="poster" />
              <div className='movie-title'>
                    <h2>{movie.title}</h2>
              </div>
              <div className='movie-details'>
                    <p>Genre: {movie.genre}</p>
                    <p>{movie.releaseYear}</p>
              </div>
              <h5 className='movie-description'>Description</h5>
              <p >{movie.description} </p>
            </div>
          )
        })
      }
    </div>

  )
}

export default List
