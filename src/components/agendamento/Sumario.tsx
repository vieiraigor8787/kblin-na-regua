import { Profissional, Servico } from '@kblinnaregua/core'
import { IconCalendar } from '@tabler/icons-react'

import useAgendamento from '@/data/hooks/useAgendamento'

export default function Sumario() {
  const { profissional, servicos, duracaoTotal, dataValida } = useAgendamento()

  return (
    <div className="flex flex-col bg-zinc-900 w-96 rounded-lg">
      {SumarioTitulo()}
      <div className="flex flex-col p-5 gap-6">
        <ProfissionalSelecionado profissional={profissional} />
        <ServicosSelecionado servicos={servicos} />
        <DuracaoTotal duracao={duracaoTotal()} />
        <MostrarData data={dataValida} />
      </div>
    </div>
  )
}

function SumarioTitulo() {
  return (
    <div className="flex items-center p-4 gap-2 border-b border-zinc-700">
      <div className="flex justify-center items-center bg-zinc-700 h-9 w-9 rounded-full">
        <IconCalendar size={20} stroke={1} />
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-zinc-300">Detalhes do agendamento</span>
        <span className="text-xs text-zinc-500 leading-3">
          Será um prazer atender você!
        </span>
      </div>
    </div>
  )
}

function ProfissionalSelecionado(props: { profissional: Profissional | null }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs uppercase text-zinc-300">Profissional:</span>
      <span className="text-sm text-white">
        {props.profissional ? props.profissional.nome : 'Não selecionado'}{' '}
      </span>
    </div>
  )
}

function ServicosSelecionado(props: { servicos: Servico[] }) {
  function renderizarServico(servico: Servico, i: number) {
    return (
      <div
        key={servico.id}
        className="flex items-center bg-zinc-700 rounded-lg"
      >
        <span className="bg-black/20 py-1.5 px-3">{i}</span>
        <span className="font-light px-3">{servico.nome}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs uppercase text-zinc-300">Serviço(s):</span>
      <div className="flex flex-wrap gap-2 text-sm text-white rounded-lg">
        {props.servicos.length === 0 ? 'Nenhum selecionado' : ''}
        {props.servicos.map((serv, i) => renderizarServico(serv, i + 1))}
      </div>
    </div>
  )
}

function DuracaoTotal(props: { duracao: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs uppercase text-zinc-300">Duração</span>
      <span className="">{props.duracao}</span>
    </div>
  )
}

function MostrarData(props: { data: Date | null }) {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-xs uppercase text-zinc-300">Data e horário:</span>
      <span className="font-light">
        {props.data?.toLocaleDateString('pt-BR', { dateStyle: 'long' })}
        {props.data ? ' às ' : null}
        {props.data?.toLocaleTimeString('pt-BR')}
      </span>
    </div>
  )
}
