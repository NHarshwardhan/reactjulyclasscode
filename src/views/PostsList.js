import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/postsSlice'

export default function PostsList() {
  
  const {posts,status,error} =   useSelector((state)=>state.posts)
  console.log(status)
  const dispatch = useDispatch()

  useEffect(()=>{
       if(status === 'idle'){
           dispatch(fetchPosts())
       }   

  },[status, dispatch])

  let content

  if(status === 'laoding'){
       content = <p>Loading...</p>
  }else if(status === 'succeeded'){
      content = (
          <ul>
              {
                 posts && posts.map(p=>(
                      <li key={p.id}>{p.title}</li>
                 ))
              }
          </ul>   
      )
  }else if(status === 'failed'){
      content = <p>{error}</p>
  }

  return (
    <div>
           <h2>Posts</h2>
           {content}

    </div>
  )
}
