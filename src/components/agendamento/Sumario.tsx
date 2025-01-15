import { IconCalendar } from '@tabler/icons-react'

export default function Sumario() {
  return (
    <div className="flex flex-col bg-zinc-900 w-96 rounded-lg">
      <div className="flex items-center p-4 gap-2 border-b border-zinc-700">
        <div className="flex justify-center items-center bg-zinc-700 h-9 w-9 rounded-full">
          <IconCalendar size={20} stroke={1} />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-zinc-300">
            Detalhes do agendamento
          </span>
          <span className="text-xs text-zinc-500 leading-3">
            Será um prazer atender você!
          </span>
        </div>
      </div>
    </div>
  )
}
