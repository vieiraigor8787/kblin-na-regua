'use client'

import FormularioAgendamento from '@/components/agendamento/FormularioAgendamento'

export default function Page() {
  return (
    <div className="flex flex-col gap-5 p-96">
      <span className="text-5xl">Agendamento</span>
      <FormularioAgendamento />
    </div>
  )
}
