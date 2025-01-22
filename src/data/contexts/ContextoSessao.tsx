'use client'
import cookie from 'js-cookie'

import { createContext, useCallback, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { Usuario } from '@kblinnaregua/core'

interface Sessao {
  token: string | null
  usuario: Usuario | null
}

interface ContextoSessaoProps {
  carregando: boolean
  token: string | null
  usuario: Usuario | null
  iniciarSessao: (jwt: string) => void
  encerrarSessao: () => void
}

const ContextoSessao = createContext<ContextoSessaoProps>({} as any)
export default ContextoSessao

export function ProvedorSessao(props: any) {
  const nomeCookie = '_kblinnaregua_token'

  const [carregando, setCarregando] = useState(true)
  const [sessao, setSessao] = useState<Sessao>({ token: null, usuario: null })

  const carregarSessao = useCallback(function () {
    try {
      setCarregando(true)
      const sessao = obterSessao()
      setSessao(sessao)
    } finally {
      setCarregando(false)
    }
  }, [])

  useEffect(
    function () {
      carregarSessao()
    },
    [carregarSessao]
  )

  function iniciarSessao(jwt: string) {
    cookie.set(nomeCookie, jwt, { expires: 1, sameSite: 'None', secure: true })
    carregarSessao()
  }

  function encerrarSessao() {
    cookie.remove(nomeCookie)
    setSessao({ token: null, usuario: null })
  }

  function obterSessao(): Sessao {
    const jwt = cookie.get(nomeCookie)

    if (!jwt) {
      return {
        token: null,
        usuario: null,
      }
    }

    try {
      const payload: any = jwtDecode(jwt)
      const expired = payload.exp! > Date.now() / 1000

      if (expired) {
        cookie.remove(nomeCookie)
        return {
          token: null,
          usuario: null,
        }
      }

      return {
        token: jwt,
        usuario: {
          id: payload.id,
          nome: payload.nome,
          email: payload.email,
          barbeiro: payload.barbeiro,
          telefone: payload.telefone,
        },
      }
    } catch (e) {
      cookie.remove(nomeCookie)
      return { token: null, usuario: null }
    }
  }

  return (
    <ContextoSessao.Provider
      value={{
        carregando,
        token: sessao.token,
        usuario: sessao.usuario,
        iniciarSessao,
        encerrarSessao,
      }}
    >
      {props.children}
    </ContextoSessao.Provider>
  )
}
