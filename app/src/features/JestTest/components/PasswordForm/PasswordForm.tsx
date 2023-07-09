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
      />
      <p aria-label="result">{message}</p>
    </div>
  )
}
