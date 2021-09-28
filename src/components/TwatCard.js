import React from 'react'

import { Grid, Typography, useMediaQuery, makeStyles, useTheme } from '@material-ui/core'
// import { makeStyles } from '@mui/styles'

import doggy from '../assets/doggy.jpeg'
import { borderRadius } from '@mui/system'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '50%',
    border: '.5px',
    borderStyle: 'solid',
    borderColor: theme.palette.common.blue,
    backgroundColor: 'black',
  },
  pic: {
    width: '3em',
    height: '3em',
    borderRadius: '8em',
    zIndex: 1,
    padding: '1em',
  },
}))

export default function TwatCard(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Grid container className={classes.container}>
      <Grid item>
        <img className={classes.pic} src={doggy} alt='logo' />
      </Grid>
      <Grid item style={{ paddingTop: '1em' }}>
        <Typography variant='h6' style={{ color: 'white' }}>
          Johnny_Neumonic <span style={{ color: theme.palette.common.grey }}>@JohnN</span>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6' style={{ color: 'white', paddingLeft: '4em', paddingBottom: '1em', paddingRight: '1em' }}>
          Omg the Browns are gonna be very good this year! As long as we don't have too many injuries we have a shot at making it even
          further in the playoffs.
        </Typography>
      </Grid>
    </Grid>
  )
}
