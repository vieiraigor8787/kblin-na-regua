import { Agendamento } from '@kblinnaregua/core'
import { useCallback, useEffect, useState } from 'react'

import useSessao from './useSessao'
import useAPI from './useAPI'

export default function useProfissionalAgenda() {
  const { usuario } = useSessao()
  const { httpGet } = useAPI()
  const [data, setData] = useState<Date>(new Date())
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  const carregarAgendamentos = useCallback(async () => {
    if (!usuario) return

    const dtString = data.toISOString().slice(0, 10)
    const agendamentos = await httpGet(`agendamentos/${usuario.id}/${dtString}`)
    setAgendamentos(agendamentos)
  }, [httpGet, usuario, data])

  useEffect(() => {
    carregarAgendamentos()
  }, [carregarAgendamentos])
}
