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
    <div className="home">
      <h1>Avocado Store</h1>
      <div className="home__avoList">
        {avocados.map((avo) => (
          <div key={avo.name}>
            <li>{avo.name}</li>
            <img src={avo.image} title={avo.name} alt={avo.name} />
            <Link href={`/product/${avo.id}`}>{avo.id}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
