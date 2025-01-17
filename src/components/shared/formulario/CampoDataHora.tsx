import { DateUtils } from '@kblinnaregua/core'

import CampoDia from './CampoDia'
import CampoHorario from './CampoHorario'

export interface CampoDataHoraProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: Date | null
  qtdeHorarios: number
  horariosOcupados: string[]
  onChange: (value: Date) => void
}
export default function CampoDataHora(props: CampoDataHoraProps) {
  const data = props.value ?? DateUtils.hojeComHoraZerada()

  return (
    <div className="flex flex-col gap-6">
      <CampoDia
        label="Dias disponíveis"
        value={data}
        onChange={props.onChange}
      />
      <CampoHorario
        label="Horários disponíveis"
        value={data}
        onChange={props.onChange}
        qtdeHorarios={props.qtdeHorarios}
        horariosOcupados={props.horariosOcupados}
      />
    </div>
  )
}
