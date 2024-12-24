import Link from 'next/link'
import Logo from './Logo'

export default function Cabecalho() {
  return (
    <header className="flex items-center h-24 bg-black/65 self-stretch">
      <nav className="flex items-center justify-between container">
        <Logo />
        <div className="">
          <Link href="/entrar">Entrar</Link>
        </div>
      </nav>
    </header>
  )
}
