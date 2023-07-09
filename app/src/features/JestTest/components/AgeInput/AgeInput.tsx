import React, { useState } from 'react'

interface Props {
  minAge?: number
  maxAge?: number
}

export const AgeInput: React.FC<Props> = ({ minAge = 0, maxAge = 130 }) => {
  const [age, setAge] = useState<number | ''>('')
  const [message, setMessage] = useState<string>('')

  const validateAge = (age: number): void => {
    if (age < minAge) {
      setMessage('Age is too low')
    } else if (age > maxAge) {
      setMessage('Age is too high')
    } else {
      setMessage('Age is accepted')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value, 10)
    if (isNaN(value)) {
      setMessage('Invalid input')
      setAge('')
    } else {
      setAge(value)
      validateAge(value)
    }
  }

  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" value={age} onChange={handleChange} />
      <p aria-label="result">{message}</p>
    </div>
  )
}
