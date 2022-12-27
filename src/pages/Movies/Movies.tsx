import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { getMovies } from '../../features/shows/showsAction'

const Movies: FC = () => {
  const { movies } = useSelector((store: any) => store.shows)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return <div>{JSON.stringify(movies)}</div>
}

export default Movies
