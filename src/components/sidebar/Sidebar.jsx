import { Bookmark, CalendarToday, Chat, Group, HelpOutline, PlayCircle, School, WorkOutline } from "@mui/icons-material"
import RssFeedIcon from "@mui/icons-material/RssFeed"
import React from "react"
import { Users } from "../../DummyData"
import CloseFrinds from "./CloseFrinds"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebarWrapper'>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <RssFeedIcon className='sidebarIcon' />
              <span className='sidebarListItemText'>Feed</span>
            </li>
            <li className='sidebarListItem'>
              <Chat className='sidebarIcon' />
              <span className='sidebarListItemText'>Chats</span>
            </li>
            <li className='sidebarListItem'>
              <PlayCircle className='sidebarIcon' />
              <span className='sidebarListItemText'>Video</span>
            </li>
            <li className='sidebarListItem'>
              <Group className='sidebarIcon' />
              <span className='sidebarListItemText'>Group</span>
            </li>
            <li className='sidebarListItem'>
              <Bookmark className='sidebarIcon' />
              <span className='sidebarListItemText'>Bookmarks</span>
            </li>
            <li className='sidebarListItem'>
              <HelpOutline className='sidebarIcon' />
              <span className='sidebarListItemText'>Questions</span>
            </li>
            <li className='sidebarListItem'>
              <WorkOutline className='sidebarIcon' />
              <span className='sidebarListItemText'>Jobs</span>
            </li>
            <li className='sidebarListItem'>
              <CalendarToday className='sidebarIcon' />
              <span className='sidebarListItemText'>Events</span>
            </li>
            <li className='sidebarListItem'>
              <School className='sidebarIcon' />
              <span className='sidebarListItemText'>Courses</span>
            </li>
          </ul>

          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarHr' />

          <ul className='sidebarFriendList'>
            {Users.map((u) => {
              return <CloseFrinds key={u.id} users={u} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
