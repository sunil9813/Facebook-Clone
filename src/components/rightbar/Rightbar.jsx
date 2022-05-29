import React from "react"
import "./rightbar.css"
import { Users } from "../../DummyData"
import Online from "./Online"
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className='rightbarContainer'>
          <img className='bithdayImg' src='assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 Other Friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightBarTitle'>Online Friends</h4>
        <ul className='friendlist'>
          {Users.map((u) => (
            <Online key={u.id} users={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City: </span>
            <span className='rightbarInfoKey'>New York</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From: </span>
            <span className='rightbarInfoKey'>Nepali</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship: </span>
            <span className='rightbarInfoKey'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img src='assets/person/1.jpeg' alt='' className='rightbarFollImg' />
            <span className='rightbarFollName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src='assets/person/2.jpeg' alt='' className='rightbarFollImg' />
            <span className='rightbarFollName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src='assets/person/3.jpeg' alt='' className='rightbarFollImg' />
            <span className='rightbarFollName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src='assets/person/4.jpeg' alt='' className='rightbarFollImg' />
            <span className='rightbarFollName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src='assets/person/5.jpeg' alt='' className='rightbarFollImg' />
            <span className='rightbarFollName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img src='assets/person/6.jpeg' alt='' className='rightbarFollImg' />
            <span className='rightbarFollName'>John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='rightbar'>
        <div className='rightbarWrapper'>
          {/*<div className='rightbarContainer'>
            <img className='bithdayImg' src='assets/gift.png' alt='' />
            <span className='birthdayText'>
              <b>Pola Foster</b> and <b>3 Other Friends</b> have a birthday today
            </span>
          </div>

          <img className='rightbarAd' src='assets/ad.png' alt='' />
          <h4 className='rightBarTitle'>Online Friends</h4>
          <ul className='friendlist'>
            {Users.map((u) => (
              <Online key={u.id} users={u} />
            ))}
          </ul>*/}
          {profile ? <ProfileRightBar /> : <HomeRightbar />}
        </div>
      </div>
    </>
  )
}

export default Rightbar
