import ForcarAutenticacao from '@/components/shared/ForcarAutenticacao'
import Pagina from '@/components/shared/formulario/Pagina'

export default function Layout(props: any) {
  return (
    <ForcarAutenticacao>
      <Pagina>{props.children}</Pagina>
    </ForcarAutenticacao>
  )
}
