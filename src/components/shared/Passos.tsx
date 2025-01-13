import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'

export interface PassosProps {
  labels: string[]
  children: any
}
export default function Passos({ labels, children }: PassosProps) {
  const [passoAtual, setPassoAtual] = useState(0)

  function passoAnterior() {
    if (passoAtual === 0) return
    setPassoAtual(passoAtual - 1)
  }

  function proximoPasso() {
    if (passoAtual === labels.length - 1) return
    setPassoAtual(passoAtual + 1)
  }

  function renderizarLabels() {
    return (
      <div className="flex gap-4">
        {labels.map((label, i) => {
          const selecionado = i === passoAtual

          return (
            <div className="flex items-center gap-2" key={i}>
              <span
                className={`w-9 h-9 rounded-full  flex items-center justify-center ${selecionado ? 'bg-white text-black font-bold' : 'bg-zinc-700 text-zinc-400'}`}
              >
                {i + 1}
              </span>
              <span className={selecionado ? 'text-white' : 'text-zinc-600'}>
                {label}
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <div>{renderizarLabels()}</div>
      <div className="">{children[passoAtual] ?? children}</div>
      <div className="flex gap-3">
        <button
          onClick={passoAnterior}
          className="flex gap-1 items-center button"
        >
          <IconChevronLeft size={20} />
          <span>Anterior</span>
        </button>
        <button
          onClick={proximoPasso}
          className="flex gap-1 items-center button"
        >
          <IconChevronRight size={20} />
          <span>Anterior</span>
        </button>
      </div>
    </div>
  )
}
