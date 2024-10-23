import React from 'react'
import "./profile.css"
import Topbar from '../../../Components/Topbar/Topbar'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import  Feed  from "../../../Components/feed/Feed"
import Rightbar from '../../../Components/Rightbar/Rightbar'
function Profile() {
  return (
    <>
    <Topbar/>
    <div className='profile'>
    <Sidebar/>
    <div className="profileright">
        <div className="profilerighttop">
          <div className="profilecover">
          <img src="assets/person/3.jpeg" className="profilecoverimage"/>
          <img src="assets/person/7.jpeg" className="profileuserimage"/>
          </div>
          
        </div>
        <div className="profileinfo">
          <h4 className="profileinfoname">Yash Chafle</h4>
          <span className="profileinfodesc">namskar</span>
        </div>
        <div className="profilerightbottom">
        <Feed/>
        <Rightbar profile/>
        </div>

    </div>
    
    </div>
   

    </>
  )
}

export default Profile
