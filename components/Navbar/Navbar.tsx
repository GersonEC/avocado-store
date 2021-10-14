import { useAvoCart } from 'contexts/cartAvosContext'
import Link from 'next/link'
import { useContext } from 'react'
import Avocado from 'styles/SVGIcons/Avocado'
import Basket from 'styles/SVGIcons/Basket'

export default function Navbar() {
  const { state } = useAvoCart()
  const cartQuantity = state
    .map((el) => el.quantity)
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0)

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link href="/">
          <div className="navbar__logo">
            <Avocado />
            <h4>Avo Store</h4>
          </div>
        </Link>
        <menu>
          <div>
            <Basket />
            <span>{cartQuantity}</span>
            <h5>Canasta</h5>
          </div>
        </menu>
      </nav>
    </div>
  )
}
