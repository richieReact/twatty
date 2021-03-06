import React, { useState, useEffect, useRef } from 'react'

import io from 'socket.io-client'

import HouseIcon from '@mui/icons-material/House'
import ExploreIcon from '@mui/icons-material/Explore'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import TwitterIcon from '@mui/icons-material/Twitter'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import PersonIcon from '@mui/icons-material/Person'

// import Button from '@mui/material/Button'
import TwatCard from '../components/TwatCard'

import { Grid, Typography, makeStyles, useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    backgroundColor: 'black',
  },
  msg: {
    backgroundColor: 'black',
    borderStyle: 'solid',
    border: '.5px',
    borderColor: theme.palette.common.lightBlack,
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    borderTopStyle: 'hidden',
    borderLeftStyle: 'hidden',
    borderRightStyle: 'hidden',
  },
  header: {
    color: 'white',
    border: '1px',
    borderColor: theme.palette.common.lightBlack,
    borderStyle: 'solid',
    borderTopStyle: 'hidden',
    borderBottomStyle: 'hidden',
    padding: '.4em',
    paddingLeft: '.7em',
  },
  scroll: {
    height: '100%',
    overflowY: 'scroll',
    border: '.5px',
    borderColor: theme.palette.common.lightBlack,
    borderStyle: 'solid',
  },
}))

export default function Home() {
  const classes = useStyles()
  const theme = useTheme()
  // const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  // const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const [msg, setMsg] = useState([])

  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = io.connect('/')

    fetch('/api/messages', {
      method: 'GET',
    })
      .then((res) => {
        return res.json()
      })
      .then((resJSON) => {
        const tweets = resJSON.reverse()
        setMsg(tweets.concat())
        // console.log(msg)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const size = 49

  return (
    <Grid container direction='row' className={classes.container}>
      {/* Left Panel */}
      <Grid item style={{ width: '25%', paddingLeft: '7.5em' }} align='left'>
        <Grid item style={{ marginTop: '2em' }}>
          <TwitterIcon fontSize='large' color='primary' />
        </Grid>

        <div style={{ display: 'flex', marginTop: '2em' }}>
          <HouseIcon color='primary' fontSize='large' />
          <Typography variant='h6' style={{ color: 'white', marginLeft: '1em' }}>
            Home
          </Typography>
        </div>
        <div style={{ display: 'flex', marginTop: '2em' }}>
          <ExploreIcon color='primary' fontSize='large' />
          <Typography variant='h6' style={{ color: 'white', marginLeft: '1em' }}>
            Explore
          </Typography>
        </div>
        <div style={{ display: 'flex', marginTop: '2em' }}>
          <MailOutlineIcon color='primary' fontSize='large' />
          <Typography variant='h6' style={{ color: 'white', marginLeft: '1em' }}>
            Messages
          </Typography>
        </div>
        <div style={{ display: 'flex', marginTop: '2em' }}>
          <BookmarkIcon color='primary' fontSize='large' />
          <Typography variant='h6' style={{ color: 'white', marginLeft: '1em' }}>
            Bookmark
          </Typography>
        </div>
        <div style={{ display: 'flex', marginTop: '2em' }}>
          <PersonIcon color='primary' fontSize='large' />
          <Typography variant='h6' style={{ color: 'white', marginLeft: '1em' }}>
            Profile
          </Typography>
        </div>
      </Grid>

      {/* The Chat */}
      <Grid item style={{ width: '50%' }}>
        <div style={{ width: '30%' }}>
          <Grid item style={{ width: '50%', backgroundColor: theme.palette.common.black, height: '100vh', position: 'fixed' }}>
            <Typography variant='h6' className={classes.header}>
              Home
            </Typography>
            <div className={classes.scroll}>
              {msg.slice(0, size).map((message, index) => {
                return (
                  // <div className={classes.msg} key={index}>
                  //   {message.text}
                  // </div>
                  <TwatCard key={index} ava={message.user.avatar} user='@NothingForNow' name={message.user.name} tweet={message.text} />
                )
              })}
            </div>
          </Grid>
        </div>
      </Grid>

      {/* Right Panel */}
      <Grid item style={{ marginLeft: 'auto', width: '25%', height: '100%' }}>
        <Typography variant='h3' style={{ color: 'white' }}>
          I Love Beka
        </Typography>
        <Typography style={{ color: 'white' }} variant='h3'>
          I Love Beka
        </Typography>
      </Grid>
    </Grid>
  )
}
