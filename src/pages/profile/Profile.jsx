import React from "react"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img src='assets/post/3.jpeg' className='profileCoverImg' />
              <img src='assets/person/7.jpeg' className='profileUserImg' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Sunil Pokhrel</h4>
              <span className='profileInfoDesc'>Hello my Firend</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
