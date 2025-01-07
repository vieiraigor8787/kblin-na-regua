'use client'

import { usePathname, useRouter } from 'next/navigation'

import useSessao from '@/data/hooks/useSessao'

export default function ForcarAutenticacao(props: any) {
  const { usuario, carregando } = useSessao()
  const router = useRouter()
  const caminho = usePathname()

  if (carregando && !usuario?.email)
    return <div className="">Carregando...</div>
  if (!usuario?.email) {
    router.push(`/entrar?destino=${caminho}`)
    return <div className="">Redirecionand...</div>
  }

  return props.children
}
