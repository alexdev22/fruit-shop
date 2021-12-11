import Header from './components/menu/Header'
import Shop from './components/shop/Shop'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FruitScreener from './components/pages/FruitScreener'
import ShoppingCart from './components/pages/ShoppingCart'
import Dashboard from './components/adminPanel/Dashboard'

const user = {
  isAdmin: true
}
const FruitApp = () => {
  return (
    <BrowserRouter>
      {!user.isAdmin && <Header />}
      <>
        <Routes>
          <Route exact path='/fruit/:id' element={<FruitScreener />} />
          <Route exact path='/cart' element={<ShoppingCart />} />
          <Route exact path='/' element={<Shop />} />
          <Route exact path='/admin' element={<Dashboard />} />
        </Routes>
      </>
      {!user.isAdmin && <Footer />}
    </BrowserRouter>
  )
}

export default FruitApp
