import { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Card from '@components/Card/Card'
import Avocado from 'styles/SVGIcons/Avocado'

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
      <div>
        <h1 className="home__title">
          Avo
          <Avocado />
          Store
        </h1>
      </div>
      <div className="home__avoList">
        {avocados.map((avo) => (
          <Card key={avo.id} avo={avo} />
        ))}
      </div>
    </div>
  )
}
