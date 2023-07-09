import { useState } from 'react'

export const ZooFee = () => {
  const [age, setAge] = useState('')
  const [isWeekday, setIsWeekday] = useState(false)
  const [message, setMessage] = useState('')

  const calculateFee = () => {
    const parsedAge = parseInt(age, 10)

    if ((parsedAge < 18 || parsedAge >= 60) && isWeekday) {
      setMessage('無料')
    } else if (parsedAge < 18 || parsedAge >= 60) {
      setMessage('1000円')
    } else {
      setMessage('2000円')
    }
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value)
  }

  return (
    <div>
      <input type="number" placeholder="Enter your age" onChange={handleAgeChange} />
      <br />
      <input id="day" type="checkbox" onChange={() => setIsWeekday(!isWeekday)} />{' '}
      <label htmlFor="day">Today is a weekday</label>
      <br />
      <button onClick={calculateFee}>Calculate</button>
      <p aria-label="result">Entrance fee is: {message}</p>
    </div>
  )
}
