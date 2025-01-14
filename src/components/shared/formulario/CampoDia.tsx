import { DateUtils } from '@kblinnaregua/core'

export interface CampoDataHoraProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: Date
  onChange: (value: Date) => void
  label?: string
}
export default function CampoDia(props: CampoDataHoraProps) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(new Date(`${e.target.value}:00Z`))
  }

  function renderizarDia(data: Date) {
    const selecionado = props.value.getDate() === data.getDate()

    return (
      <div
        key={data.getTime()}
        className={`flex-1 flex flex-col items-center gap-2 py-4 ${selecionado ? 'bg-yellow-400 text-black' : 'bg-zinc-800'}`}
        onClick={() => props.onChange(data)}
      >
        <div className="flex items-center gap-1">
          <span className="text-2xl font-black">{data.getDate()}</span>
          <span>
            {data.toLocaleDateString('pt-BR', { month: 'short' }).slice(0, 3)}
          </span>
        </div>
        <div className="uppercase">
          {data.toLocaleDateString('pt-BR', { weekday: 'short' }).slice(0, 3)}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col overflow-hidden">
      {props.label && <span>{props.label}</span>}
      <div className="flex bg-zinc-900 rounded-lg">
        {DateUtils.proximosDias(7)
          //vai pular o Domingo que é '0'
          .filter((dia) => dia.getDay() !== 0)
          .map((dia) => renderizarDia(dia))}
      </div>
    </div>
  )
}
