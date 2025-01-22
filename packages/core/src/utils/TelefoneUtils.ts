export default class TelefoneUtils {
  static formatar(tel: string): string {
    if (!tel) return ''
    const numeros = this.desformatar(tel)
    return numeros.length <= 10
      ? this.substituirNumeros(numeros, '(xx) xxxx-xxxx')
      : this.substituirNumeros(numeros, '(xx) xxxxx-xxxx')
  }

  static desformatar(tel: string): string {
    if (!tel) return ''
    return tel.replace(/\D/g, '').slice(0, 11)
  }

  private static substituirNumeros(tel: string, ref: string): string {
    let formatado = tel
      .split('')
      .reduce((tel, numero) => {
        return tel.replace('x', numero)
      }, ref)
      .replace(/x/g, '')

    if (tel.length <= 2) formatado = formatado.replace(')', '').replace(' ', '')
    if (tel.length <= 6) formatado = formatado.replace('-', '')
    return formatado
  }
}
