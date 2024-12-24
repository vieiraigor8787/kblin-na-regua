import Image from 'next/image'
import Cabecalho from '../shared/Cabecalho'
import Link from 'next/link'

export default function Slogan() {
  return (
    <div className="h-[450px] sm:h-[700px] relative">
      <Image
        src="/banners/principal.webp"
        fill
        className="oject-cover"
        alt="barbearia"
      />
      <div className="flex flex-col items-center absolute top-0 left-0 bg-black/50 w-full h-full">
        <Cabecalho />
        <div className="flex flex-col items-center justify-center flex-1 gap-5">
          <h1 className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider">
              Transformações
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient">
              Lendárias
            </span>
          </h1>
          <p className="text-base sm:text-lg font-extralight text-zinc-300">
            🤘 Seu estilo é nosso rock 🤘
          </p>
          <Link
            href="/agendamento"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-base md:text-lg px-4 py-2 rounded-sm hover:from-green-700 hover:to-green-800"
          >
            Agende agora
          </Link>
        </div>
      </div>
    </div>
  )
}
