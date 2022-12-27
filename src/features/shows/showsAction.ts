import { createAsyncThunk } from '@reduxjs/toolkit'
import data from '../../feeds/sample.json'

const getSeries = createAsyncThunk(
  'shows/getSeries',
  async (args, { rejectWithValue }) => {
    try {
      const response = await data

      return response.entries.filter(entry => entry.programType === 'series')
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
      const response = await data
      return response.entries.filter(entry => entry.programType === 'movie')
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
