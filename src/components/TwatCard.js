import React from 'react'

import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({}))

export default function TwatCard() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Grid container>
      <Grid item>Hi</Grid>
    </Grid>
  )
}
