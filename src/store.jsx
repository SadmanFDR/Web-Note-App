import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slice/UserSlice'

export default configureStore({
  reducer: {
   allUser: UserSlice,
  },
})