export default function useAPI() {
  const urlBase = 'http://localhost:4000'

  async function httpPost(path: string, body: any) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlFull = `${urlBase}${uri}`

    const res = await fetch(urlFull, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    return extrairDados(res)
  }

  async function httpGet(path: string) {
    const uri = path.startsWith('/') ? path : `/${path}`
    const urlFull = `${urlBase}${uri}`

    const res = await fetch(urlFull)
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

  return { httpGet, httpPost }
}
