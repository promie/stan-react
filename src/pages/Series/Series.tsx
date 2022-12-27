import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { getSeries } from '../../features/shows/showsAction'

const Series: FC = () => {
  const { series } = useSelector((store: any) => store.shows)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSeries())
  }, [])

  return <div>{JSON.stringify(series)}</div>
}

export default Series
