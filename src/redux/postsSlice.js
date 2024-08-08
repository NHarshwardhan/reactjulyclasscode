import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// Define an async thunk for fetching posts

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async ()=>{
      const response =  await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
    
      if(!response.ok){
         throw new Error('Failed to fetch posts')
      }
      return  response.json()
})

const postsSlice = createSlice({
     name:'posts',
     initialState:{
          posts:[],
          status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed
          error: null 
     },
     reducers:{},
     extraReducers:(builder)=>{
           builder
           .addCase(fetchPosts.pending,(state)=>{
               state.status = 'loading'
           })
           .addCase(fetchPosts.fulfilled,(state,action)=>{
               state.status = 'succeeded'
               state.posts = action.payload
           })
           .addCase(fetchPosts.rejected, (state, action)=>{
               state.status = 'failed'
               state.error = action.error.message
           })
     }

})

export default postsSlice.reducer