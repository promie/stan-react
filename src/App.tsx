import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Series from './pages/Series'
import Movies from './pages/Movies'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/series'} element={<Series />} />
          <Route path={'/movies'} element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
