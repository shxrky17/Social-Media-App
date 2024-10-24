import React from 'react'
import "./topbar.css"
import { Search, Person,Chat,Notifications } from '@mui/icons-material'
import { Link } from "react-router-dom"
const Topbar = () => {
  return (
    <div className='Topbar-container'>
      <div className='topbarleft'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='topbarlogo'>MaMa Social</span>
        </Link>
      </div>
      <div className='topbarcenter'>
        <div className='searchbar'>
          <Search className='serachicon' />
          <input className='searchinput' type="text" placeholder="Search for friends, post, or video" />
        </div>
      </div>
      <div className='topbarright'>
        <div className="topbarlinks">
          <span className="topbarlinks">
            Homepage
          </span>
          <span className="topbarlinks">
            Timeline
          </span>
        </div>
        <div className="topbaricons">
          <div className="topbaritem">
            <Person />
            <span className='topbariconbadge'>1</span>
          </div>

          <div className="topbaritem">
            <Chat />
            <span className='topbariconbadge'>2</span>
          </div>

          <div className="topbaritem">
            <Notifications />
            <span className='topbariconbadge'>3</span>
          </div>
        </div>

        <img src="/assets/person/1.jpeg" alt="" className="topbarimage" />
      </div>

    </div>
  )
}

export default Topbar
