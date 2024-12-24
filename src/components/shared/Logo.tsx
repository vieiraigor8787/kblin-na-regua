import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        width={65}
        height={65}
        alt="logotipo"
        className="hidden sm:block"
      />
      <Image
        src="/logo.png"
        width={50}
        height={50}
        alt="logotipo"
        className="block sm:hidden"
      />
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-extralight tracking-widest text-gradient">
          Kblin
        </span>
        <span className="text-[20px] sm:text-[24px] font-bold text-gradient">
          NaRégua
        </span>
      </div>
    </Link>
  )
}
