import useSWR from 'swr'

import { fetcher } from '../api'
import { StarshipResponse } from '../types/starships.types'

// Consider to move it to utils
const getParams = (pageIndex: number, searchTerm?: string) => {
  const params = new URLSearchParams()
  params.append('page', pageIndex.toString())

  if (searchTerm) {
    params.append('search', searchTerm)
  }
  return params
}

export const useStarships = (pageIndex: number, searchTerm?: string) => {
  const params = getParams(pageIndex, searchTerm)

  const { data, error } = useSWR<StarshipResponse>(
    `/starships/?${params.toString()}`,
    fetcher,
  )
  const isLoading = !data && !error

  return {
    starships: data?.results,
    error,
    pageCount: Math.ceil((data?.count ?? 1) / 10),
    isLoading,
  }
}
