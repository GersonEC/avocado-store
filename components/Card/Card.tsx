import Link from 'next/link'

interface CardProps {
  avo: TProduct
}

export default function Card({ avo }: CardProps) {
  return (
    <Link href={`/product/${avo.id}`}>
      <div className="card">
        <img src={avo.image} title={avo.name} alt={avo.name} />
        <div className="card__description">
          <h3>{avo.name}</h3>
          <p>{avo.price}</p>
        </div>
      </div>
    </Link>
  )
}
