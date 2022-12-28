import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { getMovies } from '../../features/shows/showsAction'
import './movies.css'

const Movies: FC = () => {
  const { movies } = useSelector((store: any) => store.shows)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <div className="movies-list">
      {movies?.map((movie: any, idx: number) => (
        <div key={idx} className="movie-poster-container">
          <img
            src={movie.images['Poster Art'].url}
            alt="poster"
            className="movie-poster"
          />
          <p className="movies-title">{movie.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Movies
