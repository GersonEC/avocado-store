import { useEffect, useState } from 'react'
import Link from 'next/link'

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
      <h1>Hello, world!</h1>
      <h3>Quantity: {avosQuantity}</h3>
      {avocados.map((avo) => (
        <div>
          <li key={avo.name}>{avo.name}</li>
          <Link href={`/product/${avo.id}`}>{avo.id}</Link>
        </div>
      ))}
    </div>
  )
}
