import useSessao from '@/data/hooks/useSessao'

export default function MenuUsuario() {
  const { usuario, encerrarSessao } = useSessao()
  return (
    <div className="flex">
      <span>{usuario?.nome}</span>
    </div>
  )
}
