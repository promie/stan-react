import { createSlice } from '@reduxjs/toolkit'
import { getSeries, getMovies } from './showsAction'

const initialState: any = {
  loading: false,
  error: false,
  success: false,
  series: [],
  movies: [],
}

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Get the list of series
    builder.addCase(getSeries.pending, state => {
      state.loading = true
      state.error = false
    })

    builder.addCase(getSeries.fulfilled, (state, { payload }) => {
      state.loading = false
      state.series = payload
      state.success = true
    })

    builder.addCase(getSeries.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.success = false
    })

    // Get the list of movies
    builder.addCase(getMovies.pending, state => {
      state.loading = true
      state.error = false
    })

    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.loading = false
      state.movies = payload
      state.success = true
    })

    builder.addCase(getMovies.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.success = false
    })
  },
})

export default showsSlice.reducer
