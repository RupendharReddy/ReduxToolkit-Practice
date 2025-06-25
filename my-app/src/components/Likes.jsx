import React from 'react'
import { useSelector } from 'react-redux'

const Likes = () => {
    const likes = useSelector((state)=>state.counter.value)
  return (
    <span>Likes : {likes} </span>
  )
}

export default Likes