import useAgendamento from '@/data/hooks/useAgendamento'

import CampoProfissional from '../profissional/CampoProfissional'
import CampoServicos from '../servico/CampoServicos'
import CampoDataHora from '../shared/formulario/CampoDataHora'
import Passos from '../shared/Passos'

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
      <Passos
        labels={[
          'Selecione o Profissional',
          'Selecione os serviços',
          'Escolha a data e hora',
        ]}
        acao={agendar}
        labelAcao="Agendar"
        validarPasso={[!!profissional, servicos.length > 0, !!data]}
      >
        <CampoProfissional
          label="Profissionais disponíveis"
          value={profissional}
          onChange={selecionarProfissional}
          className="input"
        />
        <CampoServicos
          label="Serviços disponíveis"
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
      </Passos>
    </div>
  )
}
