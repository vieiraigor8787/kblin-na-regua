export interface CampoEmailProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (s: string) => void
}
export default function CampoEmail(props: CampoEmailProps) {
  return (
    <input
      className="input"
      type="email"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        props.onChange?.(e)
        props.onChangeText?.(e.target.value)
      }}
    />
  )
}
