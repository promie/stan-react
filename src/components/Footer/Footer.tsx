import { FC } from 'react'
import './footer.css'
import Facebook from '../../assets/social/facebook-white.svg'
import Twitter from '../../assets/social/twitter-white.svg'
import Instagram from '../../assets/social/instagram-white.svg'
import AppStore from '../../assets/store/app-store.svg'
import GooglePlay from '../../assets/store/play-store.svg'
import WindowsStore from '../../assets/store/windows-store.svg'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer">
      <div className="nav-links">
        <p className="link">Home</p>
        <span className="divider">|</span>
        <p className="link">Terms and Conditions</p>
        <span className="divider">|</span>
        <p className="link">Privacy Policy</p>
        <span className="divider">|</span>
        <p className="link">Collection Statement</p>
        <span className="divider">|</span>
        <p className="link">Help</p>
        <span className="divider">|</span>
        <p className="link">Manage Account</p>
      </div>

      <div className="copyright">
        <p>Copyright © {currentYear} DEMO Streaming All Rights Reserved.</p>
      </div>

      <div className="social">
        <div className="social-media">
          <img
            src={Facebook}
            alt="facebook logo"
            className="facebook-logo spacing link"
          />
          <img
            src={Twitter}
            alt="twitter logo"
            className="twitter-logo spacing link"
          />
          <img
            src={Instagram}
            alt="instagram logo"
            className="instagram-logo spacing link"
          />
        </div>

        <div className="store">
          <img
            src={AppStore}
            alt="app store logo"
            className="app-store-logo spacing link"
          />
          <img
            src={GooglePlay}
            alt="google play logo"
            className="google-play-logo spacing link"
          />
          <img
            src={WindowsStore}
            alt="windows store logo"
            className="windows-store-logo spacing link"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
