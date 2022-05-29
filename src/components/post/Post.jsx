import { MoreVert } from "@mui/icons-material"
import React, { useState } from "react"
import { Users } from "../../DummyData"
import "./post.css"

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like)
  const [islike, setIsLike] = useState(false)

  const likeHandler = () => {
    setLike(islike ? like - 1 : like + 1)
    setIsLike(!islike)
  }
  return (
    <>
      <div className='post'>
        <div className='postWrapper'>
          <div className='postTop'>
            <div className='postTopLeft'>
              <img src={Users.filter((user) => user.id === post.userId)[0].profilePicture} className='postImg' />
              <span className='postName'>{Users.filter((user) => user.id === post.userId)[0].username}</span>
              <span className='postDate'>{post.date}</span>
            </div>
            <div className='postTopRight'>
              <MoreVert />
            </div>
          </div>
          <div className='postCenter'>
            <span className='postText'>{post?.desc} </span>
            <img src={post.photo} alt='' className='postCenterImg' />
          </div>
          <div className='postBottom'>
            <div className='postBottomleft'>
              <img className='likeIcon' src='assets/like.png' alt='' onClick={likeHandler} />
              <img className='likeIcon' src='assets/heart.png' alt='' onClick={likeHandler} />
              <span className='postLikeCoutner'>{like}</span>
            </div>
            <div className='postBottomright'>
              <span className='postComment'>{post.comment}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
