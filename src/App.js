import React from 'react'

import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import TwatCard from './components/TwatCard'
import theme from './components/Theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/twatcard'>
              <TwatCard />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
