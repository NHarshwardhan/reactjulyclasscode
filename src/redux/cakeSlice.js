import { createSlice } from "@reduxjs/toolkit"



// State
const initialState = {

     numberofCakes: 10,
     numberOfCandles: 15,
     tasks:[]
}

const cakeSlice = createSlice({

     name:'cake',
     initialState,
     reducers:{
         buyCake:(state, action)=>{  // state = initialState, action:buycake,payload:qty
            state.numberofCakes = state.numberofCakes-action.payload
         },
         buyCandle:(state, action)=>{  // state = initialState, action:buycake,payload:qty
            state.numberOfCandles = state.numberOfCandles-action.payload
         },
         additems:(state,action)=>{
            const task = action.payload
            state.tasks.push(task)

         }

     }
})

export const {buyCake, buyCandle,additems} = cakeSlice.actions
export default cakeSlice.reducer

