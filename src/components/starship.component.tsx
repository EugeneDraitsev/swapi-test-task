import styled from '@emotion/styled'
import { Card, CardProps, Typography } from '@mui/material'
import { memo } from 'react'

import { Starship as StarshipType } from '../types/starships.types'

interface StarshipProps extends CardProps {
  starship: StarshipType
}

const Ship = styled(Card)`
  margin: 15px;
  padding: 10px;
`
const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

// would be better to pass starship not as an object, but as primitive types to make sure that memoization works more effectively
export const Starship = memo(({ starship, ...props }: StarshipProps) => (
  <Ship {...props} sx={{ p: 2, m: 2 }}>
    <Typography>{starship.name}</Typography>
    <Stats>
      <div>
        <Typography variant="caption" color="text.secondary">
          Class
        </Typography>
        <Typography>{starship.starship_class}</Typography>
      </div>
      <div>
        <Typography variant="caption" color="text.secondary">
          Capacity
        </Typography>
        <Typography>{starship.cargo_capacity}</Typography>
      </div>
      <div>
        <Typography variant="caption" color="text.secondary">
          Cost
        </Typography>
        <Typography>{starship.cost_in_credits}</Typography>
      </div>
      <div>
        <Typography variant="caption" color="text.secondary">
          Passengers
        </Typography>
        <Typography>{starship.passengers}</Typography>
      </div>
      <div>
        <Typography variant="caption" color="text.secondary">
          Crew
        </Typography>
        <Typography>{starship.crew}</Typography>
      </div>
    </Stats>
  </Ship>
))

Starship.displayName = 'Starship'
