import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  const removeInterval = () => {
    clearInterval(intervalId)
    setIntervalId(0)
  }

  const handleChangeCounter = () => {
    if (intervalId === 0) {
      //when start is clicked
      const newIntervalId = window.setInterval(() => {
        setCounter((prevCount) => prevCount + 1)
      }, 1000)
      return setIntervalId(newIntervalId)
    }
    //when paused is clicked
    removeInterval()
  }

  const handleResetCounter = () => {
    if (intervalId !== 0) {
      //in the case when number is incrementing
      removeInterval()
    }
    if (counter !== 0) setCounter(0)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleChangeCounter}>{intervalId ? 'Pause' : 'Start'}</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  )
}

export default Counter
