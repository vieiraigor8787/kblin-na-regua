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
export default function CampoHorario(props: CampoDataHoraProps) {
  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      {props.label && (
        <span className="uppercase text-zinc-400 font-light">
          {props.label}
        </span>
      )}
      <div className="flex bg-zinc-900 rounded-lg"></div>
    </div>
  )
}
