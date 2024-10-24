import React from 'react'
import "./online.css"
function Online({ user }) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="rightbarfriend">
            <div className="rightbarimageconatiner">
                <img className="rightbarprofileimage" src={PF+user.profilePicture} />
                <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    )
}

export default Online
