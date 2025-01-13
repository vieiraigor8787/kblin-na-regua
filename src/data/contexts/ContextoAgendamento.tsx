'use client'

import { createContext, useState } from 'react'
import { Profissional, Servico } from '@kblinnaregua/core'

import useAPI from '../hooks/useAPI'
import useSessao from '../hooks/useSessao'

export interface ContextoAgendamentoProps {
  profissional: Profissional | null
  servicos: Servico[]
  data: Date
  selecionarProfissional: (profissional: Profissional) => void
  selecionarServicos: (servico: Servico[]) => void
  selecionarData: (data: Date) => void
  agendar: () => Promise<void>
}

const ContextoAgendamento = createContext<ContextoAgendamentoProps>({} as any)

export function ProvedorAgendamento(props: any) {
  const { httpPost } = useAPI()
  const { usuario } = useSessao()

  const [profissional, setProfissional] = useState<Profissional | null>(null)
  const [servicos, setServicos] = useState<Servico[]>([])
  const [data, setData] = useState<Date>(new Date())

  async function agendar() {
    await httpPost('/agendamentos', {
      data,
      usuario,
      profissional,
      servicos,
    })
  }

  return (
    <ContextoAgendamento.Provider
      value={{
        profissional,
        servicos,
        data,
        selecionarProfissional: setProfissional,
        selecionarServicos: setServicos,
        selecionarData: setData,
        agendar,
      }}
    >
      {props.children}
    </ContextoAgendamento.Provider>
  )
}

export default ContextoAgendamento
