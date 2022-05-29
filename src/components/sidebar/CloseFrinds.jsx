import React from "react"

const CloseFrinds = ({ users }) => {
  return (
    <>
      <li className='sidebarFriend'>
        <img src={users.profilePicture} alt='' className='sidebarFriendImg' />
        <span className='sidebarFriendName'>{users.username}</span>
      </li>
    </>
  )
}

export default CloseFrinds
