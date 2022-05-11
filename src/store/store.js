import { configureStore, createSlice } from "@reduxjs/toolkit";
const countSlice= createSlice({
    name:'count',
    initialState:{counter:0},
    reducers:{
        increment(state,action){
            state.counter++
        },
        decrement(state,action){
            state.counter--
        },
        addBy10(state,action){
            state.counter+=action.payload
        },
        reset(state,action){
            state.counter=0
        }
    }
})
   export const actions = countSlice.actions
    const store= configureStore({
        reducer:countSlice.reducer
    })
    export default store