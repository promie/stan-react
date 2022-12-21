import { FC } from 'react'
import './populartitles.css'
import PlaceHolder from '../../assets/placeholder.png'

const PopularTitles: FC = () => {
  return (
    <div className="pop-titles">
      <div className="image-container">
        <img
          src={PlaceHolder}
          alt="popular series"
          className="placeholder-img"
        />
        <div className="image-overlay">MOVIES</div>
      </div>
    </div>
  )
}

export default PopularTitles
