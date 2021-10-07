import { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export const getStaticProps = async () => {
  const response = await fetch(
    'https://avocado-store-i8pcleaq5-avo-team.vercel.app/api/avo'
  )
  const { data: avocados }: TAPIAvoResponse = await response.json()
  return {
    props: {
      avocados,
    },
  }
}

export default function Home({ avocados }: { avocados: TProduct[] }) {
  //const [avocados, setAvocados] = useState<TProduct[]>([] as TProduct[])
  const [avosQuantity, setAvosQuantity] = useState(0)
  return (
    <div>
      <h1>Hello, world! This is Next js application!</h1>
      <h3>Quantity: {avosQuantity}</h3>
      {avocados.map((avo) => (
        <div key={avo.name}>
          <li>{avo.name}</li>
          <img src={avo.image} title={avo.name} alt={avo.name} />
          <Link href={`/product/${avo.id}`}>{avo.id}</Link>
        </div>
      ))}
    </div>
  )
}
