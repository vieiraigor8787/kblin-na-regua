export default class MoedaUtils {
  static formatar(valor: number, simbolo: string = 'R$'): string {
    return `${simbolo} ${valor.toFixed(2).replace('.', ',')}`
  }
}
