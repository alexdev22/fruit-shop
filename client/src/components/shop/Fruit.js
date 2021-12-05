import React from 'react'
import { Link } from 'react-router-dom'

const Fruit = ({ fruit }) => {
  return (
    <div className='fruit'>
      <img alt={fruit.name} src={fruit.img} />
      <div className='fruit-info-container'>
        <h3>{fruit.name}</h3>
        <span>{fruit.price}$</span>
        <Link to={`/fruit/${fruit.id}`}>
          <button>Add to Cart</button>
        </Link>
      </div>
    </div>
  )
}

export default Fruit
