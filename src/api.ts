const BASE_URL = 'https://swapi.dev/api/'

export const fetcher = async (key: string) => {
  const result = await fetch(`${BASE_URL}${key}`)
  return result.json()
}
