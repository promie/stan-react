import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import showsReducer from './features/shows/showsSlice'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    shows: showsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
