'use client'
import { cn } from '@/lib/utils'
import { AgendaUtils, DateUtils } from '@kblinnaregua/core'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

export interface CampoHorarioProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: Date
  qtdeHorarios: number
  horariosOcupados: string[]
  onChange: (value: Date) => void
  label?: string
}
export default function CampoHorario(props: CampoHorarioProps) {
  const [horarioHover, setHorarioHover] = useState<string | null>(null)
  const { manha, tardeNoite } = AgendaUtils.horariosDoDia()

  const horarioSelecionado = props.value.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  function obterIntervalodeHorarios(horario: string | null, qtde: number) {
    if (!horario) return []
    const horarios = manha.includes(horario) ? manha : tardeNoite
    const index = horarios.indexOf(horario)
    return horarios.slice(index, index + qtde)
  }

  function renderizarHorario(horario: string) {
    const intervaloHover = obterIntervalodeHorarios(
      horarioHover,
      props.qtdeHorarios
    )

    const destaque = intervaloHover.includes(horario)

    const horariosPossiveis = intervaloHover.length === props.qtdeHorarios

    const naoSelecionavel =
      horarioHover && !horariosPossiveis && intervaloHover.includes(horario)

    const intervaloSelecionado = obterIntervalodeHorarios(
      horarioSelecionado,
      props.qtdeHorarios
    )

    const selecionado =
      intervaloSelecionado.length === props.qtdeHorarios &&
      intervaloSelecionado.includes(horario)

    const intervaloHoverOcupado =
      intervaloHover.includes(horario) &&
      intervaloHover.some((h) => props.horariosOcupados.includes(h))
    const horarioOcupado = props.horariosOcupados.includes(horario)

    return (
      <div
        className={cn(
          'flex justify-center items-center rounded h-8 bg-zinc-800',
          {
            'bg-yellow-400 text-black font-semibold': destaque,
            'bg-red-500 text-black font-semibold cursor-not-allowed':
              naoSelecionavel || intervaloHoverOcupado,
            'bg-green-400 text-black font-semibold cursor-not-allowed':
              selecionado,
          }
        )}
        onMouseEnter={() => setHorarioHover(horario)}
        onMouseLeave={() => setHorarioHover(null)}
        onClick={() => {
          if (naoSelecionavel || intervaloHoverOcupado) return

          props.onChange(DateUtils.aplicarHorario(props.value, horario))
        }}
      >
        {naoSelecionavel || horarioOcupado ? (
          <IconX size={18} />
        ) : (
          <span>{horario}</span>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 select-none">
      {props.label && (
        <span className="uppercase text-zinc-400 font-light">
          {props.label}
        </span>
      )}
      <div className="flex flex-col gap-3">
        <span className="uppercase text-zinc-400 font-light">Manhã</span>
        <div className="grid grid-cols-8 gap-1">
          {manha.map(renderizarHorario)}
        </div>
        <span className="uppercase text-zinc-400 font-light">
          Tarde e Noite
        </span>
        <div className="grid grid-cols-8 gap-1">
          {tardeNoite.map(renderizarHorario)}
        </div>
      </div>
    </div>
  )
}
