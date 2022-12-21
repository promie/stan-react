import { FC } from 'react'
import './home.css'
import Navbar from '../../components/Navbar'
import Subtitle from '../../components/Subtitle'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

const Home: FC = () => {
  return (
    <div className="home">
      <Navbar />
      <Subtitle />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
