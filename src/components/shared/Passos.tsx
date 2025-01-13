import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'

export interface PassosProps {
  labels: string[]
  children: any
}
export default function Passos({ labels, children }: PassosProps) {
  const [passoAtual, setPassoAtual] = useState(0)

  function semPassoAnterior() {
    return passoAtual === 0
  }

  function semProximoPasso() {
    return passoAtual === labels.length - 1
  }

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
    <div className="flex flex-col gap-5">
      <div>{renderizarLabels()}</div>
      <div className="">{children[passoAtual] ?? children}</div>
      <div className="flex gap-3">
        <button
          onClick={passoAnterior}
          disabled={semPassoAnterior()}
          className={`flex gap-1 items-center button ${semPassoAnterior() ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          <IconChevronLeft size={20} />
          <span>Anterior</span>
        </button>
        <button
          onClick={proximoPasso}
          disabled={semProximoPasso()}
          className={`flex gap-1 items-center button ${semProximoPasso() ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          <IconChevronRight size={20} />
          <span>Próximo</span>
        </button>
      </div>
    </div>
  )
}
