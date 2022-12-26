import { FC } from 'react'
import './populartitles.css'
import PlaceHolder from '../../assets/placeholder.png'

const PopularTitles: FC = () => {
  return (
    <div className="pop-titles">
      <div className="series">
        <div className="image-container">
          <img
            src={PlaceHolder}
            alt="popular series"
            className="placeholder-img"
          />
          <div className="image-overlay">SERIES</div>
        </div>
        <p>Popular Series</p>
      </div>

      <div>
        <div className="image-container">
          <img
            src={PlaceHolder}
            alt="popular series"
            className="placeholder-img"
          />
          <div className="image-overlay">MOVIES</div>
        </div>
        <p>Popular Movies</p>
      </div>
    </div>
  )
}

export default PopularTitles
