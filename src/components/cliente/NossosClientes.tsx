import { clientes } from '@kblinnaregua/core'

import ItemCliente from './ItemCliente'
import Titulo from '../shared/Titulo'

import { LayoutGrid } from '../ui/layout-grid'

export default function NossosClientes() {
  const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2']
  const cards = clientes.map((cliente, i) => {
    return {
      id: cliente.id,
      content: (
        <ItemCliente nome={cliente.nome} testemunho={cliente.testemunho} />
      ),
      thumbnail: cliente.imagemURL,
      className: classes[i],
    }
  })

  return (
    <div className="flex flex-col gap-y-16">
      <Titulo
        tag="Clientes"
        principal="Quem manda aqui!"
        secundario="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis in magnam id eius voluptatibus nulla ipsa, expedita sit impedit nobis consectetur. Omnis deleniti molestiae inventore corporis necessitatibus voluptate atque?"
      />
      <div className="h-[900px] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  )
}
