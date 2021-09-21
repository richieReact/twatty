import React, { useState, useEffect, useRef } from 'react'

import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'

import HouseIcon from '@mui/icons-material/House'
import ExploreIcon from '@mui/icons-material/Explore'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import TwitterIcon from '@mui/icons-material/Twitter'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import PersonIcon from '@mui/icons-material/Person'

import Button from '@mui/material/Button'

import { Grid, Typography, makeStyles, useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    backgroundColor: theme.palette.common.black,
    // flexGrow: 1,
  },
  msg: {
    backgroundColor: theme.palette.common.black,
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
        setMsg(resJSON.concat())
        // console.log(msg)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const size = 30
  // const items = list.slice(0, size).map(i => {
  //   return <myview item={i} key={i.id} />
  // },

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
        <ScrollToBottom style={{ width: '30%' }}>
          <Grid item style={{ width: '84%', backgroundColor: theme.palette.common.black, height: '100vh' }}>
            <Typography variant='h4' className={classes.header}>
              Home
            </Typography>
            <ScrollToBottom className={classes.scroll}>
              {msg.slice(0, size).map((message, index) => {
                return (
                  <div className={classes.msg} key={index}>
                    {message.text}
                  </div>
                )
              })}
            </ScrollToBottom>
          </Grid>
        </ScrollToBottom>
      </Grid>
      {/* Right Panel */}
      <Grid item style={{ marginLeft: 'auto', width: '25%', height: '100%' }}>
        <Typography variant='h3'>I Love Beka</Typography>
        <Typography variant='h3'>I Love Beka</Typography>
      </Grid>
    </Grid>
  )
}
