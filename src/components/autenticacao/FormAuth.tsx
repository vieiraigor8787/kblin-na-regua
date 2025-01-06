'use client'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../shared/Logo'

import useFormAuth from '@/data/hooks/useFormAuth'
import CampoSenha from '../shared/formulario/CampoSenha'
import CampoTexto from '../shared/formulario/CampoTexto'
import CampoTelefone from '../shared/formulario/CampoTelefone'
import CampoEmail from '../shared/formulario/CampoEmail'

export default function FormAuth() {
  const {
    modo,
    nome,
    email,
    senha,
    telefone,
    alterarModo,
    alterarNome,
    alterarEmail,
    alterarTelefone,
    alterarSenha,
    submit,
  } = useFormAuth()

  return (
    <div className="h-screen">
      <Image src="/banners/principal.webp" alt="banner" fill />
      <div className="flex flex-col gap-10 justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80">
        <Logo />
        <div>
          {modo === 'login' ? (
            <h1 className="text-2xl font-thin ">Seja bem vindo</h1>
          ) : (
            <h1 className="text-2xl font-thin ">Cadastre-se na plataforma</h1>
          )}
        </div>
        <div className="flex flex-col gap-4 w-80">
          {modo === 'cadastro' && (
            <>
              <CampoTexto
                value={nome}
                placeholder="nome"
                onChangeText={alterarNome}
              />
              <CampoTelefone
                value={telefone}
                placeholder="telefone"
                onChangeText={alterarTelefone}
              />
            </>
          )}
          <CampoEmail
            value={email}
            placeholder="email"
            onChangeText={alterarEmail}
          />
          <CampoSenha
            value={senha}
            placeholder="senha"
            onChangeText={alterarSenha}
          />
          <div className="flex  gap-2">
            <button
              onClick={submit}
              className="button flex-1 bg-green-600 hover:bg-green-700"
            >
              {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>
            <Link
              href="/"
              className="button flex-1 hover:bg-zinc-800 text-center"
            >
              Cancelar
            </Link>
          </div>

          <div className="flex mt-6">
            <button onClick={alterarModo} className="flex-1 button-outline">
              {modo === 'login' ? (
                <div>
                  Ainda não possui conta?
                  <span className="text-yellow-400 font-bold">
                    {' '}
                    Cadastre-se
                  </span>
                </div>
              ) : (
                <div>
                  Já possui conta?
                  <span className="text-yellow-400 font-bold">
                    Faça o login
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
