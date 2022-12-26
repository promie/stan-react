import { createAsyncThunk } from '@reduxjs/toolkit'

const getSeries = createAsyncThunk(
  'shows/getSeries',
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/sample.json')

      return response
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

const getMovies = createAsyncThunk(
  'shows/getMovies',
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/sample.json')

      return response
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

export { getSeries, getMovies }
