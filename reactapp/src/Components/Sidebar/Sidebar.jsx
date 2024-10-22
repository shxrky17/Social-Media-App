import React from 'react'
import "./sidebar.css"
import {RssFeed} from "@mui/icons-material"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarwrpper">
      <ul className="sidebarllist">
        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>

        <li className="sidebarlistitem">
          <RssFeed className='sidebaricon'/>
          <span className="sidebarlisttext">feed</span>
        </li>
      </ul>
      <button className='sidebarbutton'>showmore</button>
      <hr className='sidebarhr'></hr>

      <ul className="sidebarfriendlist">
        <li className="sidebarfriend">
          <img className="sidebarfriendimage" src="/assets/person/2.jpeg"/>
          <span className='sidebarfriendName'>Yash chafle</span>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
