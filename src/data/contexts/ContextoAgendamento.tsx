'use client'

import { createContext, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  AgendaUtils,
  DateUtils,
  Profissional,
  Servico,
} from '@kblinnaregua/core'

import useAPI from '../hooks/useAPI'
import useSessao from '../hooks/useSessao'

export interface ContextoAgendamentoProps {
  profissional: Profissional | null
  servicos: Servico[]
  data: Date | null
  dataValida: Date | null
  selecionarProfissional: (profissional: Profissional | null) => void
  selecionarServicos: (servico: Servico[]) => void
  selecionarData: (data: Date) => void
  agendar: () => Promise<void>
  agendamentoPossivel: () => boolean
  duracaoTotal: () => string
  precoTotal: () => number
}

const ContextoAgendamento = createContext<ContextoAgendamentoProps>({} as any)

export function ProvedorAgendamento(props: any) {
  const { httpPost, httpGet } = useAPI()
  const { usuario } = useSessao()
  const router = useRouter()

  const [profissional, setProfissional] = useState<Profissional | null>(null)
  const [servicos, setServicos] = useState<Servico[]>([])
  const [data, setData] = useState<Date | null>(null)
  const [horariosOcupados, setHorariosOcupados] = useState<string[]>([])

  function agendamentoPossivel() {
    if (!profissional) return false
    if (servicos.length === 0) return false
    if (!data) return false

    return data.getHours() >= 8 && data.getHours() <= 20
  }

  function duracaoTotal() {
    return AgendaUtils.duracaoTotal(servicos)
  }

  function precoTotal() {
    return servicos.reduce((acc, servico) => acc + servico.preco, 0)
  }

  async function agendar() {
    await httpPost('/agendamentos', {
      data,
      usuario,
      profissional,
      servicos,
    })

    router.push('/agendamento/sucesso')
    limpar()
  }

  function limpar() {
    setProfissional(null)
    setServicos([])
    setData(DateUtils.hojeComHoraZerada())
  }

  const obterHorariosOcupados = useCallback(
    async function (data: Date, profissional: Profissional): Promise<string[]> {
      if (!data || !profissional) return []

      const dtString = data.toISOString().slice(0, 10)
      const ocupacao = await httpGet(
        `/agendamentos/ocupacao/${profissional}/${dtString}`
      )
      return ocupacao ?? []
    },
    [httpGet]
  )

  useEffect(() => {
    if (!data || !profissional) return
    obterHorariosOcupados(data, profissional).then(setHorariosOcupados)
  }, [data, profissional, obterHorariosOcupados])

  return (
    <ContextoAgendamento.Provider
      value={{
        profissional,
        servicos,
        data,
        get dataValida() {
          if (!data) return null
          if (data.getHours() < 8 || data.getHours() > 20) return null
          return data
        },
        selecionarProfissional: setProfissional,
        selecionarServicos: setServicos,
        selecionarData: setData,
        agendar,
        agendamentoPossivel,
        duracaoTotal,
        precoTotal,
      }}
    >
      {props.children}
    </ContextoAgendamento.Provider>
  )
}

export default ContextoAgendamento
