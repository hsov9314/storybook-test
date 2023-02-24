import { Card } from './components/Card/Card'
import { MainLayout } from './components/Layout/MainLayout'
import { Summary } from './features/summary'

function App() {
  return (
    <>
      <MainLayout>
        <Summary />
      </MainLayout>
    </>
  )
}

export default App
