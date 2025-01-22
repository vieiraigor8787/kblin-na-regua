'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
  const get = useCallback((key: string) => {
    const valorLocal = window?.localStorage.getItem(key)
    return valorLocal ? JSON.parse(valorLocal) : null
  }, [])

  const set = useCallback((key: string, valor: any) => {
    window?.localStorage.setItem(key, JSON.stringify(valor))
  }, [])

  return { get, set }
}
