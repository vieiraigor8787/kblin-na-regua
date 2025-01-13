import useProfissionais from '@/data/hooks/useProfissionais'
import { Profissional } from '@kblinnaregua/core'

export interface CampoProfissionalProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'value' | 'onChange'
  > {
  value: Profissional | null
  onChange: (value: Profissional | null) => void
  label?: string
}
export default function CampoProfissional(props: CampoProfissionalProps) {
  const { profissionais } = useProfissionais()

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = +e.target.value
    const prof =
      profissionais.find((profissional) => profissional.id === id) ?? null
    props.onChange(prof)
  }

  return profissionais ? (
    <div className="flex flex-col">
      {props.label && <span>{props.label}</span>}
      <select {...props} value={props.value?.id ?? ''} onChange={onChange}>
        <option value="">Selecione um profissional</option>
        {profissionais.map((profissional) => {
          return (
            <option key={profissional.id} value={profissional.id}>
              {profissional.nome}
            </option>
          )
        })}
      </select>
    </div>
  ) : null
}
