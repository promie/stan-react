import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Subtitle from '../Subtitle'
import Footer from '../Footer'
import './layout.css'

const Layout: FC = () => {
  return (
    <div className="layout">
      <Navbar />
      <Subtitle />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
