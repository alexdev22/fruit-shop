export const addToCart = (id, quantity) => {
  const currentItems = JSON.parse(localStorage.getItem('cart')) || []
  localStorage.setItem('cart', JSON.stringify([{ ...currentItems, id, quantity }]))
}
