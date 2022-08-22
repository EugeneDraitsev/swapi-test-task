import {
  Container,
  Pagination,
  PaginationItem,
  Skeleton,
  TextField,
} from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useDebounce } from 'react-use'

import { Starship } from '../components/starship.component'
import { useStarships } from '../hooks'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')
  const [pageIndex, setPageIndex] = useState(1)

  useDebounce(
    () => {
      setDebouncedValue(search)
    },
    500,
    [search],
  )

  const { isLoading, starships, pageCount } = useStarships(
    pageIndex,
    debouncedValue,
  )

  return (
    <Container>
      <TextField
        sx={{ m: 2 }}
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && (
        <>
          <Skeleton variant="rectangular" height={92} sx={{ m: 2 }} />
          <Skeleton variant="rectangular" height={92} sx={{ m: 2 }} />
          <Skeleton variant="rectangular" height={92} sx={{ m: 2 }} />
          <Skeleton variant="rectangular" height={92} sx={{ m: 2 }} />
          <Skeleton variant="rectangular" height={92} sx={{ m: 2 }} />
        </>
      )}

      {starships?.map((starship) => (
        <Starship key={starship.url} starship={starship} />
      ))}

      <Pagination
        page={pageIndex}
        count={pageCount}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            onClick={() => {
              setPageIndex(item.page as number)
            }}
          />
        )}
      />
    </Container>
  )
}

export default Home
