import { fruits } from '../data/fruits'

export const filterById = (id, setFruit) => {
  return setFruit(fruits.find(fruit => fruit.id === Number(id)))
}
