import Link from 'next/link'
import Avocado from 'styles/SVGIcons/Avocado'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="navbar__logo">
          <Avocado />
          <h4>Avo Store</h4>
        </div>
      </Link>

      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}
