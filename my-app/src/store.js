import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './redux/counterSlice'
import commentSlice  from './redux/commentSlice'
import subscriberSlice  from './redux/subscriberSlice'
import usersSlice from './redux/usersSlice'
export const store = configureStore({
  reducer: {
    counter:counterSlice,
    comments:commentSlice,
    Subscriber:subscriberSlice,
    users:usersSlice
  },
})