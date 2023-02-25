import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'

export const InformationCard = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://sample.com/api')
      const json = await response.json()
      setData(json['message'])
    }
    fetchData()
  }, [])

  return (
    <Card>
      <p>{data}</p>
    </Card>
  )
}
