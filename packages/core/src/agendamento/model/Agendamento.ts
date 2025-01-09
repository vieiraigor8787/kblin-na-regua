import { Profissional } from '../../profissional'
import { Servico } from '../../servico'
import { Usuario } from '../../usuario'

export default interface Agendamento {
  id: string
  data: Date
  usuario: Usuario
  profissional: Profissional
  servicos: Servico[]
}
