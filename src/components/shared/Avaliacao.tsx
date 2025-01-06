import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from '@tabler/icons-react'

export interface AvaliacaoProps {
  nota: number
  quantidade: number
}

export default function Avaliacao({ quantidade, nota }: AvaliacaoProps) {
  const estrelas = Array.from({ length: 5 }, (_, i) => {
    const valor = i + 1

    if (nota >= valor) {
      return <IconStarFilled key={i} size={18} />
    } else if (nota > valor - 1) {
      return <IconStarHalfFilled key={i} size={18} />
    } else {
      return <IconStar key={i} size={18} />
    }
  })

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 text-yellow-400">{estrelas}</div>
      <span className="text-zinc-400 text-xs">({quantidade})</span>{' '}
    </div>
  )
}
