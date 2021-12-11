import { useEffect, useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

const Icons = () => {
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    function checkUserData () {
      const item = localStorage.getItem('userData')

      if (item) {
        setCartItems(item)
      }
    }

    window.addEventListener('storage', checkUserData)

    return () => {
      window.removeEventListener('storage', checkUserData)
    }
  }, [])

  return (
    <div className='shopping-cart-icon-container'>
      <AiOutlineShopping className='cart-icon' />
      <span>{cartItems}</span>
    </div>
  )
}

export default Icons
