'use client'

import { usePathname, useRouter } from 'next/navigation'

import useSessao from '@/data/hooks/useSessao'
import Processando from './Processando'

export default function ForcarAutenticacao(props: any) {
  const { usuario, carregando } = useSessao()
  const router = useRouter()
  const caminho = usePathname()

  if (carregando && !usuario?.email) return <Processando />
  if (!usuario?.email) {
    router.push(`/entrar?destino=${caminho}`)
    return <Processando />
  }

  return props.children
}
