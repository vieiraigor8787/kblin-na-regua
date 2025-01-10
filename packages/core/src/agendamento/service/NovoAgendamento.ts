import { Usuario } from '../../usuario'

import CasoDeUso from '../../shared/CasoDeUso'
import Agendamento from '../model/Agendamento'
import RepositorioAgendamento from '../provider/RepositorioAgendamento'

type Entrada = {
  agendamento: Agendamento
  usuario: Usuario
}

export default class NovoAgendamento implements CasoDeUso<Entrada, void> {
  constructor(private readonly repo: RepositorioAgendamento) {}

  async executar(entrada: Entrada): Promise<void> {
    const { agendamento, usuario } = entrada

    if (usuario.id !== agendamento.usuario.id)
      throw new Error('Não é possivel criar um agendamento para outro usuário')

    await this.repo.criar(agendamento)
  }
}
