import React from 'react'
import Products from './pages/products'
import Context from './context/Context'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Context>
      <>
        <Products />
        <Toaster position="bottom-right" />
        <ScrollToTop />
      </>
    </Context>
  )
}

export default App