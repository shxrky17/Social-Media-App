import React, { useEffect, useState } from 'react';
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import {format} from "timeago.js"

function Post({ post }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/user/${post.userId}`); // Ensure this path is correct
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [post.userId]); // Add post.userId as a dependency

  const likeHandler = async () => {
    try {
      // Assuming you have an API to handle likes
      await axios.put(`/post/${post._id}/like`, { userId: "yourUserId" }); // Replace "yourUserId" with actual user ID
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    } catch (err) {
      console.error("Error liking the post:", err);
    }
  };

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img 
              className="postprofileimg" 
              src={user.profilePicture || PF + "person/1.jpeg"} 
              alt="" 
            />
            <span className="postusername">{user.username || 'Unknown User'}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>
          <div className="posttopright">
            <MoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">
            {post?.desc || 'No description available'}
            <img className="postimage" src={PF+post.photo} alt="" />
          </span>
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img className="likeicon" src={`${PF}like.png`} onClick={likeHandler} alt="like" />
            <img className="likeicon" src={`${PF}heart.png`} onClick={likeHandler} alt="heart" />
            <span className="c">{like} people like this</span>
          </div>
          <div className="postbottomright">
            <span className="postcommenttext">{post?.comment || 0} comment(s)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
