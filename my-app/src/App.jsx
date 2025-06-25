import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { Increment } from './redux/counterSlice'
import Likes from './components/Likes'
import Comments from './components/Comments'
import Navbar from './components/navbar'
import Subscribers from './components/Subscribers'

function App() {
  // const value = useSelector((state) => state.counter.value)

  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const onClick = ()=>{
    setCount((count)=>count+1);
    dispatch(Increment())
  }
  return (
    <div className='appdata'>
      <Navbar/>
      <div style={{display:"flex", justifyContent:"space-around", flexDirection:"row",margintop:"20vh"}}>
        {/* <Likes/> */}
        <Comments/>
        <div>
          <button onClick={onClick}>
            likes is {count}
          </button>
        </div>
        <Subscribers/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App
