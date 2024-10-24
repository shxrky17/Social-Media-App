import React, { useEffect, useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'


import axios from "axios"
function Feed() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`post/timeline/671a502a6b1c320f19d727ec`);
      setPosts(res.data);  // Store fetched posts in state
      console.log(res)
    } catch (err) {
      console.error(err);
    }
  };

  fetchPosts();
}, []);
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        { posts.map(p=>(
        <Post key={p._id}post={p}></Post>
        ))}
        
       
      </div>
    </div>
  )
}

export default Feed
