import useProfissionais from '@/data/hooks/useProfissionais'
import Image from 'next/image'

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

interface OpcaoProps {
  profissional: Profissional
  profissionalMudou: (p: Profissional) => void
  profissionalSelecionado: boolean
}

function Opcao({
  profissional,
  profissionalMudou,
  profissionalSelecionado,
}: OpcaoProps) {
  return (
    <button
      className={`flex flex-col items-center border rounded overflow-hidden ${profissionalSelecionado ? 'border-green-400' : 'border-zinc-700'}`}
      onClick={() => profissionalMudou(profissional)}
    >
      <Image
        src={profissional.imagemURL}
        height={150}
        width={150}
        alt={profissional.nome}
      />
      <div
        className={`p-2 w-full text-sm text-center ${profissionalSelecionado ? 'bg-green-400 text-black font-semibold' : 'bg-zinc-700 '}`}
      >
        {profissional.nome.split(' ')[0]}
      </div>
    </button>
  )
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
    <div className="flex flex-col gap-5">
      {props.label && (
        <span className="text-sm uppercase text-zinc-400">{props.label}</span>
      )}
      <div className="grid grid-cols-3 self-start gap-5">
        {profissionais.map((p) => (
          <Opcao
            key={p.id}
            profissional={p}
            profissionalMudou={props.onChange}
            profissionalSelecionado={p.id === props.value?.id}
          />
        ))}
      </div>
    </div>
  ) : null
}
