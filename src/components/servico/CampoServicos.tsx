import useServicos from '@/data/hooks/useServicos'
import { Servico } from '@kblinnaregua/core'

export interface InputServicoProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'value' | 'onChange'
  > {
  value: Servico[]
  onChange: (value: Servico[]) => void
  label?: string
}
export default function CampoServicos(props: InputServicoProps) {
  const { servicos } = useServicos()

  function onChange(e: React.ChangeEvent<HTMLInputElement>, servico: Servico) {
    const novosValores = props.value.filter((s) => s.id !== servico.id)
    props.onChange(e.target.checked ? [...novosValores, servico] : novosValores)
  }

  return servicos ? (
    <div className="flex flex-col">
      {props.label && <span>{props.label}</span>}

      <div className="grid grid-cols-3 gap-7">
        {servicos.map((servico) => {
          return (
            <div key={servico.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                key={servico.id}
                onChange={(e) => onChange(e, servico)}
                checked={!!props.value.find((v) => v.id === servico.id)}
              />
              <span>{servico.nome}</span>
            </div>
          )
        })}
      </div>
    </div>
  ) : null
}
