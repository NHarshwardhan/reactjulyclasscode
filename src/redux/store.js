import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from './postsSlice'

import cakeReducer from './cakeSlice';
import logger from "redux-logger";

const store = configureStore({
      reducer:{
         cake:cakeReducer,
         posts:PostsReducer
       
      },
      middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store