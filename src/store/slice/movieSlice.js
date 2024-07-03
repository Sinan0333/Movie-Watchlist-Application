import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        setInitialData: (state,action)=>{
            state = action.payload
        },
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
        },
        addReview: (state,action)=>{
            const index = action.payload.index
            delete action.payload.index
            const rating = state[index].reviews.reduce((acc,curr)=>acc+curr.rating,0)/state[index].reviews.length
            state[index].rating = rating
        },
    }
})


export const{setInitialData,addMovie,editMovie,deleteMovie,updateStatus,addReview} = moviesSlice.actions
export default moviesSlice.reducer