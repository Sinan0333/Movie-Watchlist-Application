import React, { useState } from 'react'
import './List.css'
import { useDispatch, useSelector } from 'react-redux'
import MovieDataModal from '../MovieDataModal/MovieDataModal'
import { deleteMovie, updateStatus } from '../../store/slice/movieSlice'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'

function List() {
  const data = useSelector((state)=> state.movies)
  const dispatch = useDispatch()
  const [movieData,setMovieData] = useState("") 
  const [showModal, setShowModal] = useState(false);
  const [ConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const [index,setIndex] = useState("")


  const setData = (movie,index)=>{
    movie.index = index
    setMovieData(movie)
  }

  const handleDelete = (index) =>{
    dispatch(deleteMovie(index))
  }

  return (

    <div className='list'>
      <MovieDataModal showModal={showModal} setShowModal={setShowModal} data={movieData}/>
      <ConfirmationModal showModal={ConfirmationModalVisible} setShowModal={setConfirmationModalVisible} message={`Are you sure you want to delete ${movieData.title}`} onConfirm={() => handleDelete(index)}/>
      {
        data.map((movie,index)=>{
          return (
            <div key={movie.id} className='card'>
              <div className='card-buttons-container'>
                <div className='card-button' onClick={()=>{setData({...movie},index) , setShowModal(true)}}>
                  <img src="/assets/icons/edit.png" alt="Edit" />
                </div>
                <div className='card-button'>
                  <img src="/assets/icons/edit.png" alt="delete" onClick={()=>{setData({...movie},index) , setConfirmationModalVisible(true)}}/>
                </div>
                <div className='card-button'>
                  <img src={movie.status ? "/assets/icons/eye.png" : "/assets/icons/blind.png"} alt="Add review" onClick={()=>dispatch(updateStatus(index))}/>
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
