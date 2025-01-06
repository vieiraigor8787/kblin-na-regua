import { Servico } from '@kblinnaregua/core'
import Image from 'next/image'

export interface ItemServicoProps {
  servico: Servico
}
export default function ItemServico({ servico }: ItemServicoProps) {
  return (
    <div className="flex overflow-hidden rounded-xl bg-zinc-800">
      <Image
        src={servico.imagemURL}
        width={150}
        height={150}
        alt={servico.nome}
        className="object-cover"
      />
      <div className="flex flex-col p-5 gap-2">
        <span className="text-xl font-black">{servico.nome}</span>
        <span className="text-xs text-zinc-400 flex-1">
          {servico.descricao}
        </span>
        <span className="text-lg font-bold">R$ {servico.preco.toFixed(2)}</span>
      </div>
    </div>
  )
}
