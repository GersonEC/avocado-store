import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  const [avocados, setAvocados] = useState<TProduct[]>([] as TProduct[])
  const [avosQuantity, setAvosQuantity] = useState(0)

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setAvocados(data)
        setAvosQuantity(length)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Hello, world!</h1>
      <h3>Quantity: {avosQuantity}</h3>
      {avocados.map((avo) => (
        <li key={avo.name}>{avo.name}</li>
      ))}
    </div>
  )
}
