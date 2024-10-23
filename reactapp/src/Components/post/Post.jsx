import React, { useState } from 'react';
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

function Post({ post }) {
  // Ensure post and post properties are properly handled if they are undefined
  const user = Users.find(u => u.id === post?.userId);

  // Safeguard: if post.like is undefined, default to 0
  const [like, setLike] = useState(post?.like || 0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            {/* Use user's profile picture or a default one */}
            <img 
              className="postprofileimg" 
              src={user?.profilePicture || "assets/person/default.jpeg"} 
              alt="" 
            />
            {/* Safely access username or provide a default */}
            <span className="postusername">{user?.username || "Unknown User"}</span>
            <span className="postdate">{post?.date || 'No date available'}</span>
          </div>
          <div className="posttopright">
            <MoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">
            {post?.desc || 'No description available'}
            <img className="postimage" src={post?.photo || "assets/post/default.jpeg"} alt="" />
          </span>
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img className="likeicon" src="assets/like.png" onClick={likeHandler} alt="like" />
            <img className="likeicon" src="assets/heart.png" onClick={likeHandler} alt="heart" />
            {/* Display the updated like count */}
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
