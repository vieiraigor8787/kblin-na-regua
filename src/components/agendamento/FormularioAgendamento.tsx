import useAgendamento from '@/data/hooks/useAgendamento'

import CampoProfissional from '../profissional/CampoProfissional'
import CampoServicos from '../servico/CampoServicos'
import CampoDataHora from '../shared/formulario/CampoDataHora'
import Passos from '../shared/Passos'
import Sumario from './Sumario'

export default function FormularioAgendamento() {
  const {
    agendar,
    profissional,
    servicos,
    selecionarServicos,
    selecionarProfissional,
    selecionarData,
    data,
    agendamentoPossivel,
    qtdeHorarios,
    horariosOcupados,
  } = useAgendamento()

  return (
    <div className="flex gap-10">
      <Passos
        labels={[
          'Selecione o Profissional',
          'Selecione os serviços',
          'Escolha a data e hora',
        ]}
        acao={agendar}
        labelAcao="Agendar"
        validarPasso={[
          !!profissional,
          servicos.length > 0,
          agendamentoPossivel(),
        ]}
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
          value={data}
          onChange={selecionarData}
          qtdeHorarios={qtdeHorarios()}
          horariosOcupados={horariosOcupados}
        />
      </Passos>
      <Sumario />
    </div>
  )
}
