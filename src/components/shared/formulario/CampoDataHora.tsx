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
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(new Date(`${e.target.value}:00Z`))
  }

  return (
    <div className="flex flex-col">
      {props.label && <span>{props.label}</span>}
      <input
        type="datetime-local"
        value={props.value?.toISOString().substring(0, 16) ?? ''}
        onChange={onChange}
        min={
          props.apenasFuturo
            ? new Date().toISOString().substring(0, 16)
            : undefined
        }
        className="input"
      />
    </div>
  )
}
