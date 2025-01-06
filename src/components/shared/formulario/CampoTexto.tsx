export interface CampoTextoProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void
}
export default function CampoTexto(props: CampoTextoProps) {
  return (
    <input
      className="input"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        props.onChange?.(e)
        props.onChangeText?.(e.target.value)
      }}
    />
  )
}
