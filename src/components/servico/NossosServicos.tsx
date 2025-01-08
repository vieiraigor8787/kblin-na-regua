import { servicos } from '@kblinnaregua/core'

import ItemServico from './ItemServico'
import Titulo from '../shared/Titulo'

export default function NossosServicos() {
  return (
    <div className="flex flex-col gap-y-16">
      <Titulo
        tag="Serviços"
        principal="Do clássico ao rock"
        secundario="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis in magnam id eius voluptatibus nulla ipsa, expedita sit impedit nobis consectetur. Omnis deleniti molestiae inventore corporis necessitatibus voluptate atque?"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {servicos.map((servico) => (
          <ItemServico key={servico.id} servico={servico} />
        ))}
      </div>
    </div>
  )
}
