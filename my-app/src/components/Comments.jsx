import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment } from '../redux/commentSlice';

const Comments = () => {
    const [showuser, setShowUser] = useState(false);
    const [input, setInput] = useState('');
    const comments = useSelector((store)=>store.comments.commentsData)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        if(input.length > 0){
            dispatch(addNewComment(input))
        }
        setInput('');
        setShowUser(false);
    }
    useEffect(()=>{
        console.log(comments);
    },[comments])
  return (
    <span>
        <button onClick={() => setShowUser(!showuser)}>comment</button>
        {showuser && <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter your comment' onChange={(e) => setInput(e.target.value)} value={input}/>
            <button type='submit'>submit</button>
            </form>
        }
        {comments.map((comment)=>{
            return <li style={{color:"red"}}>{comment}</li>
        })}
    </span>
  )
}

export default Comments