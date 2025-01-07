import { useRouter, useSearchParams } from 'next/navigation'
import useAPI from './useAPI'
import useSessao from './useSessao'

import { useEffect, useState } from 'react'

export default function useFormAuth() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [telefone, setTelefone] = useState('')

  const { httpPost } = useAPI()
  const { usuario, iniciarSessao } = useSessao()

  const router = useRouter()
  const params = useSearchParams()

  useEffect(() => {
    if (usuario?.email) {
      const destino = params.get('destino') as string
      router.push(destino ? destino : '/')
    }
  }, [usuario, router, params])

  function alterarModo() {
    setModo(modo === 'login' ? 'cadastro' : 'login')
  }

  async function login() {
    const token = await httpPost('/auth/login', { email, senha })
    iniciarSessao(token)
  }

  async function registrar() {
    await httpPost('/auth/registrar', { nome, telefone, email, senha })
  }

  async function submit() {
    if (modo === 'login') {
      await login()
    } else {
      await registrar()
      await login()
    }
    limparFormulario()
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
