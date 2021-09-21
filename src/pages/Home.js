import React, { useState, useEffect, useRef } from 'react'

import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'

import { Grid, Typography, useMediaQuery, makeStyles, useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    backgroundColor: '#252525',
    // flexGrow: 1,
  },
  msg: {
    backgroundColor: 'white',
  },
}))

export default function Home() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

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

  return (
    <Grid container direction='row' className={classes.container}>
      <Grid item style={{ width: '25%' }}>
        <Typography variant='h3'>I Love Beka</Typography>
      </Grid>
      <Grid item style={{ width: '50%', backgroundColor: '#525252', height: '80vh' }}>
        <Typography variant='h3'>Yooo</Typography>
        <ScrollToBottom style={{ height: '90%', overflowY: 'scroll' }}>
          {msg.map((message, index) => {
            return (
              <ScrollToBottom className={classes.msg} key={index}>
                {message.text}
              </ScrollToBottom>
            )
          })}
        </ScrollToBottom>
      </Grid>
      <Grid item style={{ marginLeft: 'auto', width: '25%', height: '100%' }}>
        <Typography variant='h3'>I Love Beka</Typography>
        <Typography variant='h3'>I Love Beka</Typography>
      </Grid>
    </Grid>
  )
}
