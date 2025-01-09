import CasoDeUso from '../../shared/CasoDeUso'
import { Usuario } from '../../usuario'
import Agendamento from '../model/Agendamento'
import RepositorioAgendamento from '../provider/RepositorioAgendamento'

export default class BuscarAgendamentosCliente
  implements CasoDeUso<Usuario, Agendamento[]>
{
  constructor(private readonly repo: RepositorioAgendamento) {}
  async executar(usuario: Usuario): Promise<Agendamento[]> {
    return await this.repo.buscarPorEmail(usuario.email)
  }
}
