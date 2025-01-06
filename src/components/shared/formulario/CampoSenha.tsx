import { IconEye, IconEyeCancel } from '@tabler/icons-react'
import { useState } from 'react'

export interface CampoSenhaProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void
}
export default function CampoSenha(props: CampoSenhaProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false)

  function alternarMostrarSenha() {
    setMostrarSenha(!mostrarSenha)
  }

  return (
    <div className="flex input">
      <input
        className="flex-1 bg-transparent outline-none"
        type={mostrarSenha ? 'text' : 'password'}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.onChange?.(e)
          props.onChangeText?.(e.target.value)
        }}
      />
      {mostrarSenha ? (
        <IconEyeCancel
          className="text-zinc-400"
          onClick={alternarMostrarSenha}
        />
      ) : (
        <IconEye className="text-zinc" onClick={alternarMostrarSenha} />
      )}
    </div>
  )
}
