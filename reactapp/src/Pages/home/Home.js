import React from 'react'
import Feed from "../../Components/feed/Feed.jsx"
import Topbar from '../../Components/Topbar/Topbar.jsx'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Rightbar from '../../Components/Rightbar/Rightbar.jsx'
import "./Home.css"
const Home = () => {
  return (<>
    <Topbar/>
    <div className='homeContainer'>
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
   

    </>
  )
}

export default Home
