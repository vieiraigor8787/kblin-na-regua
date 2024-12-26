export default interface ProvedorCriptografia {
  criptografar(senha: string): Promise<string>
  comparar(senha: string, senhaHash: string): Promise<boolean>
}
