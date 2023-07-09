import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage } from './Pages'

test('full app rendering/navigating', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/about" Component={AboutPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </MemoryRouter>
  )

  // ページ遷移前はHome Pageが存在していることをテスト
  expect(screen.getByText(/welcome to home page/i)).toBeInTheDocument()

  // HomePageからAboutPageへ遷移するリンクをクリック
  const link = screen.getByText(/go to about page/i)
  fireEvent.click(link)

  // ページ遷移後はAbout Pageが存在していることをテスト
  expect(screen.getByText(/welcome to about page/i)).toBeInTheDocument()
})
