export interface ItemClienteProps {
  nome: string
  testemunho: string
}
export default function ItemCliente({ nome, testemunho }: ItemClienteProps) {
  return (
    <div className=" ">
      <p className="font-bold text-4xl text-white">{nome}</p>
      <p className="my-4 text-zinc-400">{testemunho}</p>
    </div>
  )
}
