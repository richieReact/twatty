import React from 'react'

import { Grid, Typography, useMediaQuery, makeStyles, useTheme } from '@material-ui/core'
// import { makeStyles } from '@mui/styles'

import doggy from '../assets/doggy.jpeg'
import { borderRadius } from '@mui/system'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    borderStyle: 'solid',
    backgroundColor: 'black',
    border: '.5px',
    borderColor: theme.palette.common.lightBlack,
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    borderTopStyle: 'hidden',
    borderLeftStyle: 'hidden',
    borderRightStyle: 'hidden',
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
        <img className={classes.pic} src={props.ava} alt='logo' />
      </Grid>
      <Grid item style={{ paddingTop: '1em' }}>
        <Typography variant='h6' style={{ color: 'white' }}>
          {props.name} <span style={{ color: theme.palette.common.grey }}>{props.user}</span>
        </Typography>
      </Grid>
      <Grid item container>
        <Typography variant='h6' style={{ color: 'white', paddingLeft: '4em', paddingBottom: '1em', paddingRight: '1em' }}>
          {props.tweet}
        </Typography>
      </Grid>
    </Grid>
  )
}
