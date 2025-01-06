import useAPI from './useAPI'
import useSessao from './useSessao'

import { useState } from 'react'

export default function useFormAuth() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [telefone, setTelefone] = useState('')

  const { httpPost } = useAPI()
  const { iniciarSessao } = useSessao()

  function alterarModo() {
    setModo(modo === 'login' ? 'cadastro' : 'login')
  }

  async function submit() {
    if (modo === 'login') {
      const token = await httpPost('/auth/login', { email, senha })
      iniciarSessao(token)
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
