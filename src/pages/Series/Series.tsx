import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { getSeries } from '../../features/shows/showsAction'
import './series.css'

const Series: FC = () => {
  const { series } = useSelector((store: any) => store.shows)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSeries())
  }, [dispatch])

  return (
    <div className="series-list">
      {series?.map((ser: any, idx: number) => (
        <div key={idx} className="poster-container">
          <img
            src={ser.images['Poster Art'].url}
            alt="poster"
            className="poster"
          />
          <p className="series-title">{ser.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Series
