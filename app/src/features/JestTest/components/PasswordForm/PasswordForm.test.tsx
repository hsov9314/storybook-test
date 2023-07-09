import { fireEvent, render, screen } from '@testing-library/react'
import { PasswordForm } from './PasswordForm'

test('validates password input based on length', () => {
  render(<PasswordForm minLength={5} maxLength={10} />)

  const input = screen.getByLabelText('password')

  // パスワードの長さが足りないケース
  fireEvent.change(input, { target: { value: '1234' } })
  expect(screen.getByLabelText('result').textContent).toBe('Password is too short')

  // パスワードの長さの要件を満たしているケース
  fireEvent.change(input, { target: { value: '123456' } })
  expect(screen.getByLabelText('result').textContent).toBe('Password is set')

  // パスワードが長すぎるケース
  fireEvent.change(input, { target: { value: '12345678901' } })
  expect(screen.getByLabelText('result').textContent).toBe('Password is too long')
})
