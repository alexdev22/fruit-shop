import Header from './components/menu/Header'
import Shop from './components/shop/Shop'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FruitScreener from './components/pages/FruitScreener'

const FruitApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/fruit/:id' element={<FruitScreener />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default FruitApp
