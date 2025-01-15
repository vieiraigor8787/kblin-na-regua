import { DateUtils } from '@kblinnaregua/core'

import CampoDia from './CampoDia'
import CampoHorario from './CampoHorario'

export interface CampoDataHoraProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: Date | null
  onChange: (value: Date) => void
  apenasFuturo?: boolean
  label?: string
}
export default function CampoDataHora(props: CampoDataHoraProps) {
  const data = props.value ?? DateUtils.hojeComHoraZerada()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <span>{data.toLocaleDateString('pt-BR')}</span>
        <span>{data.toLocaleTimeString('pt-BR')}</span>
      </div>
      <CampoDia
        label="Dias disponíveis"
        value={data}
        onChange={props.onChange}
      />
      <CampoHorario
        label="Horários disponíveis"
        value={data}
        onChange={props.onChange}
        qtdeHorarios={4}
      />
    </div>
  )
}
