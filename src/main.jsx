import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyled from './styles/globalStyles'
import MyRoutes from './routes'

import { Header } from './components/Header'
import { Footer } from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <GlobalStyled />
      <Header />
      <MyRoutes />
      <Footer />
  </>,
)
