import { fireEvent, render, screen } from '@testing-library/react'
import { ZooFee } from './ZooFee'

test('calculates entrance fee based on conditions', () => {
  render(<ZooFee />)

  const ageInput = screen.getByPlaceholderText('Enter your age')
  const weekdayBox = screen.getByLabelText('Today is a weekday')
  const button = screen.getByText('Calculate')

  // Case 1: I am not a child, not over 60, not weekday
  // 子供でなく、60歳以上でもない、平日でもない場合
  // →一般料金
  fireEvent.change(ageInput, { target: { value: '25' } })
  fireEvent.click(button)
  expect(screen.getByLabelText('result').textContent).toBe('Entrance fee is: 2000円')

  // Case 2: I am a child, not weekday
  // 子供であるが、平日ではない場合
  // →子供割引適用
  fireEvent.change(ageInput, { target: { value: '15' } })
  fireEvent.click(button)
  expect(screen.getByLabelText('result').textContent).toBe('Entrance fee is: 1000円')

  // Case 3: I am a child, and is weekday
  // 子供で、平日である場合
  // →無料
  fireEvent.click(weekdayBox)
  fireEvent.click(button)
  expect(screen.getByLabelText('result').textContent).toBe('Entrance fee is: 無料')

  // Case 4: I am not a child, over 60, not weekday
  // 子供ではないが、60歳以上で、平日ではない場合
  // →割引適用
  fireEvent.change(ageInput, { target: { value: '65' } })
  fireEvent.click(weekdayBox)
  fireEvent.click(button)
  expect(screen.getByLabelText('result').textContent).toBe('Entrance fee is: 1000円')

  // Case 5: I am not a child, over 60, and is weekday
  // 子供ではないが、60歳以上で、平日である場合
  // →無料
  fireEvent.click(weekdayBox)
  fireEvent.click(button)
  expect(screen.getByLabelText('result').textContent).toBe('Entrance fee is: 無料')
})
