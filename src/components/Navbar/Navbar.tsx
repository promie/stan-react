import { FC } from 'react'
import './navbar.css'

const Navbar: FC = () => {
  return (
    <div className="container">
      <h1 className="title">Demo Streaming</h1>
      <div className="link-container">
        <p className="log-in-txt">Log in</p>
        <p className="trial-btn">Start your free trial</p>
      </div>
    </div>
  )
}

export default Navbar
