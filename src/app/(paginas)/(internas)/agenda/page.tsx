'use client'
import { useRouter } from 'next/navigation'
import { IconCalendarCancel } from '@tabler/icons-react'

import useSessao from '@/data/hooks/useSessao'
import useProfissionalAgenda from '@/data/hooks/useProfissionalAgenda'
import CabecalhoComTitulo from '@/components/shared/CabecalhoComTitulo'
import DiaInput from '@/components/shared/formulario/DiaInput'
import AgendaProfissionalItem from '@/components/agendamento/AgendaProfissionalItem'

export default function PaginaAgenda() {
  const { usuario } = useSessao()
  const router = useRouter()
  const { data, alterarData, excluirAgendamento, agendamentos } =
    useProfissionalAgenda()

  if (!usuario?.barbeiro) {
    return router.push('/')
  }

  return (
    <div className="flex flex-col bg-zinc-900">
      <CabecalhoComTitulo
        titulo="Minha agenda"
        descricao="Veja e gerencia sua agenda"
      />
      <div className="container flex flex-col gap-10 py-16">
        <DiaInput data={data} dataMudou={alterarData} />
        {agendamentos.length > 0 ? (
          <div className="flex flex-col gap-4">
            {agendamentos.map((agendamento) => (
              <AgendaProfissionalItem
                key={agendamento.id}
                agendamento={agendamento}
                excluir={excluirAgendamento}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <IconCalendarCancel size={150} stroke={1} />
            <span className="text-xl text-zinc-600">
              Nenhum agendamento para hoje
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
