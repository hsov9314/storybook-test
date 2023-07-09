import React, { useState } from 'react'

type Props = {
  minLength: number
  maxLength: number
}

export const PasswordForm: React.FC<Props> = ({ minLength, maxLength }) => {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const validatePassword = (password: string): void => {
    let message = ''
    if (password.length < minLength) {
      message = 'Password is too short'
    } else if (password.length > maxLength) {
      message = 'Password is too long'
    } else {
      message = 'Password is set'
    }
    setMessage(message)
  }

  return (
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        aria-label="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value)
          validatePassword(e.target.value)
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <p aria-label="result">{message}</p>
    </div>
  )
}
