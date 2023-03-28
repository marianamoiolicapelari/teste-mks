import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyled from './styles/globalStyles'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/about'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <GlobalStyled />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>,
)
