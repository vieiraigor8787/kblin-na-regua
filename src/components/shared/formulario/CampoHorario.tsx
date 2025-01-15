'use client'
import { cn } from '@/lib/utils'
import { AgendaUtils } from '@kblinnaregua/core'
import { useState } from 'react'

export interface CampoHorarioProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: Date
  qtdeHorarios: number
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
    const intervalo = obterIntervalodeHorarios(horarioHover, props.qtdeHorarios)
    const destaque = intervalo.includes(horario)

    return (
      <div
        className={cn(
          'flex justify-center items-center rounded h-8 bg-zinc-800',
          {
            'bg-yellow-400 text-black font-semibold': destaque,
          }
        )}
        onMouseEnter={() => setHorarioHover(horario)}
        onMouseLeave={() => setHorarioHover(null)}
      >
        <span>{horario}</span>
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
