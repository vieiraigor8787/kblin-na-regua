export default class AgendaUtils {
  private static minutos = [0, 15, 30, 45]

  static horariosDoDia() {
    return {
      manha: this.gerarHorarios([8, 9, 10, 11]),
      tardeNoite: this.gerarHorarios([13, 14, 15, 16, 17, 18, 19, 20]),
    }
  }

  static gerarHorarios(horas: number[]): string[] {
    return horas.reduce((horarios, hora) => {
      const horariosDaHora = this.minutos.map((minuto) => {
        const horaFormatada = hora.toString().padStart(2, '0')
        const minutoFormatado = minuto.toString().padStart(2, '0')

        return `${horaFormatada}:${minutoFormatado}`
      })
      return [...horarios, ...horariosDaHora]
    }, [] as string[])
  }
}

console.log(AgendaUtils.horariosDoDia())
