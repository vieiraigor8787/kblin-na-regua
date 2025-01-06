import useSessao from '@/data/hooks/useSessao'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { IconHome, IconLogout } from '@tabler/icons-react'
import Link from 'next/link'

export default function MenuUsuario() {
  const { usuario, encerrarSessao } = useSessao()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="font-bold">{usuario?.nome}</span>
            <span className="text-zinc-400 text-xs">{usuario?.email}</span>
          </div>
          <div className="bg-zinc-700 w-10 h-10 rounded-full p-1 relative">
            <Image src="/avatar.png" fill alt="avatar" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={encerrarSessao}>
          <Link href="/" className="flex gap-2">
            <IconHome size={18} />
            <span className="cursor-pointer">Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="" />
        <DropdownMenuItem
          onClick={encerrarSessao}
          className="flex gap-2 text-red-500"
        >
          <IconLogout size={18} />
          <span className="cursor-pointer">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
