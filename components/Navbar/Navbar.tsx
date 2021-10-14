import Link from 'next/link'
import Avocado from 'styles/SVGIcons/Avocado'
import Basket from 'styles/SVGIcons/Basket'

export default function Navbar() {
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
            <h5>Canasta</h5>
          </div>        
        </menu>
      </nav>
    </div>
  )
}
