import { render, screen } from '@testing-library/react'
import FruitScreener from '../../components/pages/FruitScreener'

test('Should show counterApp', () => {
  render(<FruitScreener />)
  const counterIncrement = screen.getByText(/+/i)
  expect(counterIncrement).toBeInTheDocument()
}
)
