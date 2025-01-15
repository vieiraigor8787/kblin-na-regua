import AgendadoComSucesso from '@/components/agendamento/AgendadoComSucesso'
import CabecalhoComTitulo from '@/components/shared/CabecalhoComTitulo'
import Rodape from '@/components/shared/Rodape'

export default function Page() {
  return (
    <div className="flex flex-col">
      <CabecalhoComTitulo
        titulo="Agendamento de serviços"
        descricao="Seu horário está garantido. Será um prazer atendê-lo!"
      />
      <div className="container p-10">
        <AgendadoComSucesso />
      </div>
      <Rodape />
    </div>
  )
}
