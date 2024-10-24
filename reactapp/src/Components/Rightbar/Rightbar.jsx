import React from 'react'
import "./rightbar.css"
import { RssFeed } from "@mui/icons-material"
import { Users } from "../../dummyData"
import Online from '../online/Online'
function Rightbar({ profile }) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const Homerightbar = () => {
    return (
      <>
        <div className="birthdaycontainne">
          <img className="birthdayimage" src="assets/gift.png" alt="" />
          <span className="birthdaytext"><b>Pola Foster</b> and 3 other friends have a birthday today</span>
        </div>
        <img className="rightbarad" src="assets/ad.png" alt="" />
        <h4 className="rightbartitle">Online friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}


        </ul>
      </>
    )
  }

  const Profilerightbar = () => {
    return (
      <>
        <h4 className="rightbartitle">User Information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfokey">Nagpur</span>
          </div>

          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfokey">India</span>
          </div>

          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfokey">Single</span>
          </div>
        </div>

        <h4 className="rightbartitle">user friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src={`${PF}person/1.jpeg`} alt="" className="rightbarfollowingimage" />
            <span className="rightfollowingname">Lalllu SAI</span>
          </div>

          <div className="rightbarfollowing">
            <img src={`${PF}person/3.jpeg`} alt="" className="rightbarfollowingimage" />
            <span className="rightfollowingname">Lalllu SAI</span>
          </div>

          <div className="rightbarfollowing">
            <img src={`${PF}person/4.jpeg`} alt="" className="rightbarfollowingimage" />
            <span className="rightfollowingname">Lalllu SAI</span>
          </div>

          <div className="rightbarfollowing">
            <img src={`${PF}person/5.jpeg`} alt="" className="rightbarfollowingimage" />
            <span className="rightfollowingname">Lalllu SAI</span>
          </div>


          <div className="rightbarfollowing">
            <img src={`${PF}person/6.jpeg`} alt="" className="rightbarfollowingimage" />
            <span className="rightfollowingname">Lalllu SAI</span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {profile?<Profilerightbar/>:<Homerightbar/>}
      </div>
    </div>
  )
}

export default Rightbar
