import { useState } from 'react'
import useAPI from './useAPI'

export default function useFormAuth() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [telefone, setTelefone] = useState('')

  const { httpPost } = useAPI()

  function alterarModo() {
    setModo(modo === 'login' ? 'cadastro' : 'login')
  }

  async function submit() {
    if (modo === 'login') {
      const token = await httpPost('/auth/login', { email, senha })
      console.log('Token:', token)
      limparFormulario()
    } else {
      await httpPost('/auth/registrar', { nome, telefone, email, senha })
      limparFormulario()
    }
  }

  function limparFormulario() {
    setNome('')
    setEmail('')
    setSenha('')
    setTelefone('')
    setMostrarSenha(mostrarSenha)
    setModo('login')
  }

  return {
    modo,
    nome,
    email,
    senha,
    telefone,
    alterarNome: setNome,
    alterarEmail: setEmail,
    alterarSenha: setSenha,
    alterarTelefone: setTelefone,
    alterarModo,
    submit,
  }
}
