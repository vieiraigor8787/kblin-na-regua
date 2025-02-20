import useSessao from './useSessao'

export default function useAPI() {
  const { token } = useSessao()

  const urlBase = 'http://localhost:4000'

  async function httpPost(path: string, body: any) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlFull = `${urlBase}${uri}`

    const res = await fetch(urlFull, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
    return extrairDados(res)
  }

  async function httpGet(path: string) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlFull = `${urlBase}${uri}`

    const res = await fetch(urlFull, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return extrairDados(res)
  }

  async function extrairDados(res: Response) {
    let content = ''

    try {
      content = await res.text()
      return JSON.parse(content)
    } catch (error) {
      return content
    }
  }

  async function httpDelete(path: string) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlFull = `${urlBase}${uri}`
    const res = await fetch(urlFull, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return extrairDados(res)
  }

  return { httpGet, httpPost, httpDelete }
}
