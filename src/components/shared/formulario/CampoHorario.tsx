import { AgendaUtils } from '@kblinnaregua/core'

export interface CampoDataHoraProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: Date
  onChange: (value: Date) => void
  label?: string
}
export default function CampoHorario(props: CampoDataHoraProps) {
  const { manha, tardeNoite } = AgendaUtils.horariosDoDia()

  function renderizarHorario(horario: string) {
    return (
      <div
        className={`flex justify-center items-center rounded h-8 bg-zinc-800`}
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
