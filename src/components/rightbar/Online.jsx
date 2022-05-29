import React from "react"

const Online = ({ users }) => {
  return (
    <>
      <li className='rightbarFriend'>
        <div className='rightbarImgContainer'>
          <img src={users.profilePicture} className='profileimg' alt='' />
          <span className='rightbarOnline'></span>
        </div>
        <span className='rightbarUsername'>{users.username}</span>
      </li>
    </>
  )
}

export default Online
