import React from 'react'
import "./close.css"
function Close({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture}></img>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default Close
