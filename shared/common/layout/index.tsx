import { ReactNode } from 'react'
import { Container, Grid } from '@mui/material'

export function Index({ actions, mainPageInfo }: { actions: ReactNode; mainPageInfo: ReactNode }) {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container>
        <Grid item xs={4} md={3}>
          {actions}
        </Grid>
        <Grid container spacing={2} xs={8} md={9}>
          <Grid item>{mainPageInfo}</Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
