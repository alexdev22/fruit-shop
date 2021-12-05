import React from 'react'
import Fruit from './Fruit'
import { fruits } from '../../data/fruits'

const Shop = () => {
  return (
    <main className='shop-grid'>
      {fruits.map((fruit) => <Fruit key={fruit.fruit} fruit={fruit} />
      )}
    </main>
  )
}

export default Shop
