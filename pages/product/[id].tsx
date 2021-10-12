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
  return (
    <div className="product">
      <div className="product-preview">
        <img src={product.image} title={product.name} alt={product.name} />
        <div className="product-preview__cart">
          <h3>{product.name}</h3>
          <p className="product-preview__cart--price">{product.price}</p>
          <p className="product-preview__cart--sku">SKU:{product.sku}</p>
        </div>
      </div>
      <div className="product-detail">
        <h3>About this Avocado</h3>
        <p>{product.attributes.description}</p>
      </div>
      <div className="product-attributes">
        <h3>Attributes</h3>
        <p><strong>Shape:</strong> {product.attributes.shape}</p>
        <p><strong>Hardiness:</strong> {product.attributes.hardiness}</p>
        <p><strong>Taste:</strong> {product.attributes.taste}</p>
      </div>
    </div>
  )
}
