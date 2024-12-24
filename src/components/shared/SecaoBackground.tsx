import Image from 'next/image'

export interface SecaoBackgroundProps {
  children: React.ReactNode
  imagem: string
}

export default function SecaoBackground({
  children,
  imagem,
}: SecaoBackgroundProps) {
  return (
    <div className="relative">
      <Image
        src={imagem}
        fill
        alt="imagem de fundo"
        className="object-cover -z-30"
      />
      <div className="bg-black/80 sm:bg-transparent sm:bg-gradient-to-r from-black/60 via-black/95 to-black/60 ">
        <div className="container py-10">{children}</div>
      </div>
    </div>
  )
}
