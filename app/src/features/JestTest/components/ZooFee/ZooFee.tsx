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
      <input
        type="number"
        placeholder="Enter your age"
        onChange={handleAgeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <br />
      <input id="day" type="checkbox" onChange={() => setIsWeekday(!isWeekday)} />{' '}
      <label htmlFor="day">Today is a weekday</label>
      <br />
      <button
        onClick={calculateFee}
        className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Calculate
      </button>
      <p aria-label="result">Entrance fee is: {message}</p>
    </div>
  )
}
