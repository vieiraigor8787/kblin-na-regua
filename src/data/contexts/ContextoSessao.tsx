'use client'
import { createContext } from 'react'

const ContextoSessao = createContext<any>({})
export default ContextoSessao

export function ProvedorSessao(props: any) {
  return (
    <ContextoSessao.Provider value={{ chave: 'valor' }}>
      {props.children}
    </ContextoSessao.Provider>
  )
}
