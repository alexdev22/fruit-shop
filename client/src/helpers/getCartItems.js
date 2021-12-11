
export const getCartItems = (setCartItems) => {
  const items = JSON.parse(localStorage.getItem('cart'))

  return setCartItems(items.length)
}
