import CampoDia from './CampoDia'

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
  return (
    <div className="flex flex-col">
      <CampoDia
        label="Dias disponíveis"
        value={props.value ?? new Date()}
        onChange={props.onChange}
      />
    </div>
  )
}
