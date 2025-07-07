import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './redux/counterSlice'
import commentSlice  from './redux/commentSlice'
import subscriberSlice  from './redux/subscriberSlice'
import userSlice from './redux/userSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    comments:commentSlice,
    Subscriber:subscriberSlice,
    users:userSlice
    
  },
})