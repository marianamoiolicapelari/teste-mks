import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyled from './styles/globalStyles'

import { Menu } from './components/Menu'
import MyRoutes from './routes'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
      <GlobalStyled />
      <Menu />
      <MyRoutes />
      <Footer />

  </>,
)
