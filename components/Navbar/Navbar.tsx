import Link from 'next/link'
import Avocado from 'styles/SVGIcons/Avocado'

export default function Navbar() {
  return (
    <nav>
      <menu>
        <Avocado />
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
