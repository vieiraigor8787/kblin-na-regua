import { Usuario } from '@kblinnaregua/core'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState, useCallback } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ContextoUsuarioProps {
  carregando: boolean
  usuario: Usuario | null
  entrar: (usuario: Usuario) => Promise<void>
  sair: () => void
}

const ContextoUsuario = createContext<ContextoUsuarioProps>({} as any)

export function ProvedorUsuario({ children }: any) {
  const { get, set } = useLocalStorage()
  const router = useRouter()
  const [carregando, setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  const carregarUsuario = useCallback(
    function () {
      try {
        const usuarioLocal = get('usuario')
        if (usuarioLocal) {
          setUsuario(usuarioLocal)
        }
      } finally {
        setCarregando(false)
      }
    },
    [get]
  )

  async function entrar(usuario: Usuario) {
    set('usuario', null)
    setUsuario(usuario)
  }

  function sair() {
    set('usuario', null)
    setUsuario(null)
    router.push('/')
  }

  useEffect(() => carregarUsuario(), [carregarUsuario])

  return (
    <ContextoUsuario.Provider
      value={{
        carregando,
        usuario,
        entrar,
        sair,
      }}
    >
      {children}
    </ContextoUsuario.Provider>
  )
}

export default ContextoUsuario
