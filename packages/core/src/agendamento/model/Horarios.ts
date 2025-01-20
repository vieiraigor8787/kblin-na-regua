import { AgendaUtils } from '../../utils'

export default class Horarios {
  constructor(
    public readonly inicio: string,
    public readonly qtde: number,
    private readonly horariosOcupados: string[]
  ) {}

  get todos() {
    const { manha, tardeNoite } = AgendaUtils.horariosDoDia()
    const horarios = manha.includes(this.inicio) ? manha : tardeNoite
    const i = horarios.indexOf(this.inicio)

    return horarios.slice(i, i + this.qtde)
  }

  get completo() {
    return this.todos.length === this.qtde
  }

  get incompleto() {
    return !this.completo
  }

  get ocupado() {
    return this.todos.some((h) => this.horariosOcupados.includes(h))
  }
}
