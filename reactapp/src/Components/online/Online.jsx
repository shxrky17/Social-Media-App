import React from 'react'
import "./online.css"
function Online({ user }) {
    return (
        <li className="rightbarfriend">
            <div className="rightbarimageconatiner">
                <img className="rightbarprofileimage" src={user.profilePicture} />
                <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    )
}

export default Online
