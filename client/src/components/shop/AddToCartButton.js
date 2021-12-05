
const AddToCartButton = ({ text, className = 'button add-to-cart-btn', onClick }) => {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default AddToCartButton
