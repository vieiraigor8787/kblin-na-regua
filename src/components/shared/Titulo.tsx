export interface TituloProps {
  tag?: string
  principal: string
  secundario: string
}
export default function Titulo({ tag, secundario, principal }: TituloProps) {
  return (
    <div className="flex flex-col items-center">
      {tag && (
        <div className="bg-zinc-700 px-4 py-1.5 rounded-md font-black mb-2 text-sm md:text-base">
          {tag}
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient">
        {principal}
      </h2>
      <h3 className="text-zinc-500 md:w-[450px] px-7 md:px-0 text-center">
        {secundario}
      </h3>
    </div>
  )
}
