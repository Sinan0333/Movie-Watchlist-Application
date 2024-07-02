import React, { useEffect, useState } from 'react'
import './MovieDataModal.css'
import { notifyError } from '../../constants/toast'
import { useDispatch } from 'react-redux'
import { addMovie, editMovie } from '../../store/slice/movieSlice'
import axios from 'axios'
import ImageInput from '../ImgageInput/ImageInput'

function MovieDataModal({ showModal,setShowModal,data }) {
    const dispatch = useDispatch()
    const [id,setId] = useState("")
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [releaseYear,setReleaseYear] = useState("")
    const [genre,setGenre] = useState("")
    const [image,setImage] = useState("")

    useEffect(()=>{
      if(data){
        setId(data.id)
        setTitle(data.title)
        setDescription(data.description)
        setReleaseYear(data.releaseYear)
        setGenre(data.genre)
        setImage(data.image)
      }
    },[data])


    if (!showModal) return null;
  

    const uploadImage = async () => {
      const preset_key = import.meta.env.VITE_PRESET_KEY;
      const cloud_name = import.meta.env.VITE_CLOUD_NAME;
    
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", preset_key);
      formData.append("folder", "movies");
    
      try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
        return response.data.secure_url;
      } catch (error) {
        console.error(error);
        throw new Error("Image upload failed");
      }
    };

    const handleSubmit = async () => {
      if (!title.trim()) {
        return notifyError("Title cannot be empty");
      } else if (title.length > 50) {
        return notifyError("Title cannot be more than 50 characters");
      } else if (!description.trim()) {
        return notifyError("Description cannot be empty");
      } else if (description.length > 200) {
        return notifyError("Description cannot be more than 200 characters");
      } else if (!releaseYear.trim()) {
        return notifyError("Release year cannot be empty");
      } else if (releaseYear.length <= 0) {
        return notifyError("Release year cannot be less than 0");
      } else if (!genre.trim()) {
        return notifyError("Genre cannot be empty");
      } else if (genre.length > 50) {
        return notifyError("Genre cannot be more than 50 characters");
      } else if (!image) {
        return notifyError("Image cannot be empty");
      }
  
      try {

        let url;
        if(data && data.image !== image){
          url = await uploadImage();
        }else if(!data){
          url = await uploadImage();
        }else{
          url = data.image
        }
 
        if(data){
          dispatch(editMovie({id,title,description,releaseYear,genre,image:url,index:data.index}));
        }else{
          const uniqueId = "id" + Date.now();
          dispatch(addMovie({ id:uniqueId, title, description, releaseYear, genre, image: url,status:false }));
        }
        setShowModal(!showModal);
      } catch (error) {
        notifyError("Image upload failed");
      }
    };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={()=>setShowModal(!showModal)}>&times;</span>
        <h2>Add Movie</h2>

        <ImageInput state={image} setState={setImage} name={"image"}/>

        <div className='field'>
          <label htmlFor="title">Movie Title</label>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" id="title" name="title" required />
        </div>

        <div className='field'>
          <label htmlFor="description">Description</label>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description} id="description" name="description" required></textarea>
        </div>

        <div className='field'>
          <label htmlFor="releaseYear">Release Year</label>
          <input onChange={(e)=>setReleaseYear(e.target.value)} value={releaseYear} type="number" id="releaseYear" name="releaseYear" required />
        </div>
          
        <div className='field'>
           <label htmlFor="genre">Genre</label>
           <input onChange={(e)=>setGenre(e.target.value)} value={genre} type="text" id="genre" name="genre" required />
        </div> 
          <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default MovieDataModal
