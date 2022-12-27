import { FC } from 'react'
import { Link } from 'react-router-dom'
import './populartitles.css'
import PlaceHolder from '../../assets/placeholder.png'

const PopularTitles: FC = () => {
  return (
    <div className="pop-titles">
      <div className="series">
        <Link to={'/series'} className="image-container">
          <img
            src={PlaceHolder}
            alt="popular series"
            className="placeholder-img"
          />
          <div className="image-overlay">SERIES</div>
        </Link>
        <p>Popular Series</p>
      </div>

      <div>
        <Link to={'/movies'} className="image-container">
          <img
            src={PlaceHolder}
            alt="popular series"
            className="placeholder-img"
          />
          <div className="image-overlay">MOVIES</div>
        </Link>
        <p>Popular Movies</p>
      </div>
    </div>
  )
}

export default PopularTitles
