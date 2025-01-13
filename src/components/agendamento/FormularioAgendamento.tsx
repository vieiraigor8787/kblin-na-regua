'use client'
import useAgendamento from '@/data/hooks/useAgendamento'

import CampoProfissional from '../profissional/CampoProfissional'
import CampoServicos from '../servico/CampoServicos'
import CampoDataHora from '../shared/formulario/CampoDataHora'

export default function FormularioAgendamento() {
  const {
    agendar,
    profissional,
    servicos,
    selecionarServicos,
    selecionarProfissional,
    selecionarData,
    data,
  } = useAgendamento()

  return (
    <div className="flex flex-col gap-5">
      <CampoProfissional
        label="Profissional"
        value={profissional}
        onChange={selecionarProfissional}
        className="input"
      />
      <CampoServicos
        label="Serviços"
        value={servicos}
        onChange={selecionarServicos}
        className="input"
      />
      <CampoDataHora
        label="Data e hora"
        value={data}
        onChange={selecionarData}
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
