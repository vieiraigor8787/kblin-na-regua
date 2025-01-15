import Image from 'next/image'
import Link from 'next/link'

export default function AgendadoComSucesso() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src="/agendamento.png"
        width={400}
        height={400}
        alt="Agendado com sucesso"
      />
      <h2 className="text-3xl font-black">Tudo marcado! Obrigado demais!</h2>
      <p className="text-zinc-400 text-lg font-thin w-96 text-center">
        Agora é só aguardar o horário agendado e aparecer no nosso salão!!
      </p>
      <Link href="/" className="button mt-5 bg-green-600">
        Voltar para a página inicial
      </Link>
    </div>
  )
}
