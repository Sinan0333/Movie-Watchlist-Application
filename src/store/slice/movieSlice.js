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
        },
        updateStatus: (state,action)=>{
            state[action.payload].status = !state[action.payload].status
        }
    }
})


export const{addMovie,editMovie,deleteMovie,updateStatus} = moviesSlice.actions
export default moviesSlice.reducer