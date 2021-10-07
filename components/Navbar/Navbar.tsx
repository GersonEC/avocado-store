import Link from 'next/link'
import Avocado from 'styles/SVGIcons/Avocado'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Avocado />
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
