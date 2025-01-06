export interface CampoTelefoneProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void
}
export default function CampoTelefone(props: CampoTelefoneProps) {
  return (
    <input
      className="input"
      type="tel"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        props.onChange?.(e)
        props.onChangeText?.(e.target.value)
      }}
    />
  )
}
