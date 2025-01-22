import Rodape from './Rodape'

export interface PaginaProps {
  children: any
  className?: string
}

export default function Pagina({ children, className }: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <main className={className}>{children}</main>
      <Rodape />
    </div>
  )
}
