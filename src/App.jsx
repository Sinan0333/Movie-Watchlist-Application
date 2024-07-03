import './App.css'
import List from './components/List/List'
import Banner from './components/Banner/Banner'
import { setInitialData } from './store/slice/movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/movies');
        dispatch(setInitialData(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    const addMovie = async (newMovie) => {
      try {
        const response = await axios.post('http://localhost:3001/movies', newMovie);
        setMovies([...movies, response.data]);
      } catch (error) {
        console.error("Error adding movie: ", error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className='app'>
      <Banner/>
      <List/>
    </div>
  )
}

export default App
