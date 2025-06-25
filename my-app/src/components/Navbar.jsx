import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const likesCount = useSelector((store)=>store.counter.value)
    const commentsCount = useSelector((store)=>store.comments.commentsCount)
    const subscribers = useSelector((store)=>store.Subscriber.subscriberName)
  return (
    <div style={{backgroundColor:"skyblue", width:"100%", height:"50px", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <span>
            likes:{likesCount}
        </span>
        <span>
            No.of comments: {commentsCount}
        </span>
        <span>
            No.of Subscriber: {subscribers.length}
        </span>
    </div>
  )
}

export default Navbar