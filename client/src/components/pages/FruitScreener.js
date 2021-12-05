import { useEffect, useState } from 'react'
import { filterById } from '../../helpers/searchByFruitId'
import { useParams } from 'react-router-dom'
import AddToCartButton from '../shop/AddToCartButton'
import Counter from '../shop/Counter'
import { addToCart } from '../../helpers/addToCart'

const FruitScreener = () => {
  const { id } = useParams()

  const [fruit, setFruit, origin] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    filterById(id, setFruit)
  }, [id, setFruit])

  const { name, img, calibre, unitsPerKg, category, variety } = fruit

  return (
    <div className='fruit-screner-container'>
      <h2 className='fruit-screener-h2'>{name}</h2>
      <section className='fruit-screener-section'>
        <img className='fruit-screener-img' alt={name} src={img} />
        <div className='fruit-screener-info-container'>
          <div className='fruit-screener-info'>
            <span>Origin: {origin}</span>
            <span>Varity: {variety}</span>
            <span>Calibre: {calibre}</span>
            <span>Category: {category}</span>
            <span>Units Per Kg: {unitsPerKg}</span>
          </div>
          <AddToCartButton onClick={() => addToCart(id, counter)} text='Add to cart' />
          <Counter counter={counter} setCounter={setCounter} />
        </div>
      </section>
    </div>
  )
}

export default FruitScreener
