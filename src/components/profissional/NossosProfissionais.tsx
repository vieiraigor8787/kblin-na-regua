import profissionais from '@/data/constants/profissionais'

import ItemProfissional from './ItemProfissional'
import Titulo from '../shared/Titulo'

export default function NossosProfissionais() {
  return (
    <div className="flex flex-col gap-y-16">
      <Titulo
        tag="Time"
        principal="Nossos profissionais"
        secundario="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis in magnam id eius voluptatibus nulla ipsa, expedita sit impedit nobis consectetur. Omnis deleniti molestiae inventore corporis necessitatibus voluptate atque?"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {profissionais.map((profissional) => (
          <ItemProfissional key={profissional.id} profissional={profissional} />
        ))}
      </div>
    </div>
  )
}
