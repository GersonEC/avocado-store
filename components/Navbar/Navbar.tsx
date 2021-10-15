import { useAvoCart } from 'contexts/cartAvosContext'
import Link from 'next/link'
import Avocado from 'styles/SVGIcons/Avocado'
import Basket from 'styles/SVGIcons/Basket'

export default function Navbar() {
  const { state } = useAvoCart()
  const cartQuantity = state
    .map((el) => el.quantity)
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0)

  return (
    <header>
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
              <div className="navbar__cart">
                <Basket />
                <span className="navbar__cart-quantity">{cartQuantity}</span>
              </div>
            </div>
          </menu>
        </nav>
      </div>
    </header>
  )
}
