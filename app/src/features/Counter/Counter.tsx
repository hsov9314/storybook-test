import { useState } from 'react'
import { Button } from '../../stories/Button'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl">{count}</p>
      <div className="flex">
        <Button onClick={() => setCount(count - 1)} label="-"></Button>
        <Button onClick={() => setCount(count + 1)} label="+"></Button>
      </div>
    </div>
  )
}
