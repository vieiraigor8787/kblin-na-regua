import Image from 'next/image'

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
interface OpcaoProps {
  servico: Servico
  servicoMudou: (s: Servico) => void
  servicoSelecionado: boolean
}

function Opcao({ servico, servicoMudou, servicoSelecionado }: OpcaoProps) {
  return (
    <button
      className={`flex flex-col items-center border rounded overflow-hidden select-none ${servicoSelecionado ? 'border-green-400' : 'border-zinc-700'}`}
      onClick={() => servicoMudou(servico)}
    >
      <Image
        src={servico.imagemURL}
        height={150}
        width={150}
        alt={servico.nome}
      />
      <div
        className={`p-2 w-full text-sm text-center ${servicoSelecionado ? 'bg-green-400 text-black font-semibold' : 'bg-zinc-700 '}`}
      >
        {servico.nome.split(' ')[0]}
      </div>
    </button>
  )
}

export default function CampoServicos(props: InputServicoProps) {
  const { servicos } = useServicos()

  function alternarMarcacao(servico: Servico) {
    const marcado = props.value.some((v) => v.id === servico.id)

    if (marcado) {
      props.onChange(props.value.filter((v) => v.id !== servico.id))
    } else {
      props.onChange([...props.value, servico])
    }
  }

  return servicos ? (
    <div className="flex flex-col gap-5">
      {props.label && (
        <span className="text-sm uppercase text-zinc-400">{props.label}</span>
      )}

      <div className="grid grid-cols-3 self-start gap-7">
        {servicos.map((s) => (
          <Opcao
            key={s.id}
            servico={s}
            servicoMudou={alternarMarcacao}
            servicoSelecionado={props.value.some((v) => v.id === s.id)}
          />
        ))}
      </div>
    </div>
  ) : null
}
