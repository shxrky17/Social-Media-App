import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../dummyData"
function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        {Posts.map(p=>(
        <Post key={p.id}post={p}></Post>
        ))}
        <Post/>
       
      </div>
    </div>
  )
}

export default Feed
