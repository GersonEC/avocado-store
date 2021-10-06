import { useRouter } from 'next/dist/client/router'
import { GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://avocado-store-i8pcleaq5-avo-team.vercel.app/api/avo'
  )
  const { data: avocados }: TAPIAvoResponse = await response.json()
  const paths = avocados.map((avo) => ({
    params: {
      id: avo.id,
    },
  }))
  return {
    paths,
    //Incremental static generation, qualsiasi pagina che non si specifichi nei paths, dara 404
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  debugger
  const id = params?.id as string
  const response = await fetch(
    `https://avocado-store-i8pcleaq5-avo-team.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()
  return {
    props: {
      product,
    },
  }
}

export default function ProductItem({ product }: { product: TProduct }) {
  /*const {
    query: { id },
  } = useRouter()*/

  return <h1>Product: {product.name}</h1>
}
