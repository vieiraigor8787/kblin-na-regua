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

  //new date, '09:15'
  static aplicarHorario(data: Date, horario: string) {
    const novaData = new Date(data)
    const [hora, min] = horario.split(':').map(Number)

    novaData.setHours(hora, min, 0, 0)
    return novaData
  }
}

// console.log(DateUtils.proximosDias(7, false))
// console.log(DateUtils.aplicarHorario(new Date(), '15:45').toLocaleTimeString())
