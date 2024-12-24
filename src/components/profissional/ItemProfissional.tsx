import Profissional from '@/core/profissional/Profissional'
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from '@tabler/icons-react'
import Image from 'next/image'
import Avaliacao from '../shared/Avaliacao'

export interface ItemProfissionalProps {
  profissional: Profissional
}
export default function ItemProfissional({
  profissional,
}: ItemProfissionalProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-zinc-800">
      <div className="relative h-72 w-full">
        <Image
          src={profissional.imagemURL}
          alt={profissional.nome}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col p-4 gap-5">
        <span className="text-2xl font-black">{profissional.nome}</span>
        <span className="text-xs text-zinc-400 flex-1">
          {profissional.descricao}
        </span>
        <Avaliacao
          nota={profissional.avaliacao}
          quantidade={profissional.qtdeAvaliacoes}
        />

        <div className="flex gap-3 text-zinc-300">
          <IconBrandYoutube stroke={1} />
          <IconBrandInstagram stroke={1} />
          <IconBrandLinkedin stroke={1} />
          <IconBrandX stroke={1} />
        </div>
      </div>
    </div>
  )
}
