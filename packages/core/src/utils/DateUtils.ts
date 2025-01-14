export default class DateUtils {
  static hojeComHoraZerada() {
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
    return hoje
  }

  static proximosDias(qtde: number, incluirHoje: boolean = true) {
    const dias = []
    const hoje = DateUtils.hojeComHoraZerada()

    if (incluirHoje) dias.push(hoje)

    for (let i = 1; dias.length < qtde; i++) {
      const dia = new Date(hoje)
      dia.setDate(hoje.getDate() + i)
      dias.push(dia)
    }
    return dias
  }
}
// console.log(DateUtils.proximosDias(7, false))
