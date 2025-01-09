import { Usuario } from '../../usuario'

import CasoDeUso from '../../shared/CasoDeUso'
import Agendamento from '../model/Agendamento'
import RepositorioAgendamento from '../provider/RepositorioAgendamento'

type NovoAgendamentoParams = {
  agendamento: Agendamento
  usuario: Usuario
}

export default class NovoAgendamento
  implements CasoDeUso<NovoAgendamentoParams, void>
{
  constructor(private readonly repo: RepositorioAgendamento) {}

  async executar(params: NovoAgendamentoParams): Promise<void> {
    const { agendamento, usuario } = params

    if (usuario.email !== agendamento.usuario.email)
      throw new Error('Não é possivel criar um agendamento para outro usuário')

    await this.repo.criar(params.agendamento)
  }
}
