import { useState } from 'react'
import { Profissional, Servico } from '@kblinnaregua/core'

import useAPI from '@/data/hooks/useAPI'

import CampoProfissional from '../profissional/CampoProfissional'
import CampoServicos from '../servico/CampoServicos'
import CampoDataHora from '../shared/formulario/CampoDataHora'
import useSessao from '@/data/hooks/useSessao'

export default function FormularioAgendamento() {
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

  function alterarServicos(servicos: Servico[]) {
    setServicos(servicos)
  }

  return (
    <div className="flex flex-col gap-5">
      <CampoProfissional
        label="Profissional"
        value={profissional}
        onChange={setProfissional}
        className="input"
      />
      <CampoServicos
        label="Serviços"
        value={servicos}
        onChange={alterarServicos}
        className="input"
      />
      <CampoDataHora
        label="Data e hora"
        value={data}
        onChange={setData}
        apenasFuturo
      />
      <div>
        <button onClick={agendar} className="button bg-">
          Agendar
        </button>
      </div>
    </div>
  )
}
