import Link from 'next/link'
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return(
    <footer>
      <div className="footer-about">
        <h5>Nosotros</h5>
        <Link href="/about">Conoce mas</Link>
      </div>
      <div className="footer-services">
        <h5>Servicios</h5>
        <Link href="/">Todos los poductos</Link>
      </div>
      <div className="footer-made">
        <h5>Hecho por</h5>
        <a href="https://twitter.com/EC_Gerson" style={{marginRight: '8px'}}><AiOutlineTwitter size="24px" /></a>
        <a href="https://github.com/GersonEC"><AiFillGithub size="24px" /></a>
      </div>
    </footer>
  )
}