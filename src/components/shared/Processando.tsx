import Image from 'next/image'

import Logo from './Logo'

export default function Processando() {
  return (
    <div className="h-screen">
      <Image src="/banners/principal.webp" alt="banner" fill />
      <div className="flex flex-col gap-2 justify-center items-center absolute top-0 left-0 w-full h-full bg-black/90 scale-125">
        <Logo />
        <span className="font-light text-zinc-500">Processando...</span>
      </div>
    </div>
  )
}
