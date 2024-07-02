import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovie: (state,action)=>{
            state.push(action.payload) 
        },
        editMovie: (state,action)=>{
            const index = action.payload.index
            delete action.payload.index
            state[index] = action.payload
        },
        deleteMovie: (state,action)=>{
            const index = action.payload
            state.splice(index,1)
        }
    }
})


export const{addMovie,editMovie,deleteMovie} = moviesSlice.actions
export default moviesSlice.reducer