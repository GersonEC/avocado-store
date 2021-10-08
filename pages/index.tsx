import { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Card from '@components/Card/Card'

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
      <h1 className="home__title">Avocado Store</h1>
      <div className="home__avoList">
        {avocados.map((avo) => (
          <Card key={avo.id} avo={avo} />
        ))}
      </div>
    </div>
  )
}
