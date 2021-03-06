import * as React from 'react'
import Home from './pages/home'
import Projects from './pages/projects'
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'
import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Customers from './pages/customers'
import Career from './pages/career'
import About from './pages/about'
import Contact from './pages/contact'

const theme = extendTheme({
  colors: {
    primary: {
      100: '#ce717f',
      200: '#c65a6a',
      300: '#be4255',
      400: '#b62b3f',
      500: '#ae132a',
      600: '#9d1126',
      700: '#8b0f22',
      800: '#7a0d1d',
      900: '#680b19',
    },
    secondary: {
      100: '#beb7b8',
      200: '#b3abac',
      300: '#a89fa0',
      400: '#9d9394',
      500: '#928788',
      600: '#837a7a',
      700: '#756c6d',
      800: '#665f5f',
      900: '#585152',
    },
  },
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Router>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/customers">
          <Customers />
        </Route>
        <Route path="/career">
          <Career />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
)
