import { fireEvent, render, screen } from '@testing-library/react'
import { AgeInput } from './AgeInput'

test('validates age input based on the boundaries', () => {
  render(<AgeInput />)

  const input = screen.getByLabelText('Age:')

  // 有効同値パーティションの最小値-1
  fireEvent.change(input, { target: { value: '-1' } })
  expect(screen.getByLabelText('result').textContent).toBe('Age is too low')

  // 有効同値パーティションの最小値
  fireEvent.change(input, { target: { value: '0' } })
  expect(screen.getByLabelText('result').textContent).toBe('Age is accepted')

  // 有効同値パーティションの最大値
  fireEvent.change(input, { target: { value: '130' } })
  expect(screen.getByLabelText('result').textContent).toBe('Age is accepted')

  // 有効同値パーティションの最大値+1
  fireEvent.change(input, { target: { value: '131' } })
  expect(screen.getByLabelText('result').textContent).toBe('Age is too high')

  // 数値以外の入力
  fireEvent.change(input, { target: { value: 'abcd' } })
  expect(screen.getByLabelText('result').textContent).toBe('Invalid input')
})
