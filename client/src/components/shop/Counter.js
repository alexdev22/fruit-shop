
const Counter = ({ counter, setCounter }) => {
  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  const handleDecrease = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className='counter-container'>
      <button onClick={handleIncrease} className='counter increment'>+</button>
      <div className='counter-number'>{counter}</div>
      <button onClick={handleDecrease} className='counter decrement'>-</button>
    </div>
  )
}

export default Counter
