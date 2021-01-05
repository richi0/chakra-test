import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme
} from '@chakra-ui/react'
import { Logo } from './Logo'

const theme = extendTheme({
  colors: {
    primary: {
      100: "#90e38d",
      200: "#79dd76",
      300: "#63d75f",
      400: "#4dd148",
      500: "#36cc31",
      600: "#20c61a",
      700: "#1db217",
      800: "#1a9e15",
      900: "#168b12",
    },
    secondary: {
      100: "#d2ae84",
      200: "#c99d6b",
      300: "#c08d53",
      400: "#b77d3a",
      500: "#ae6c22",
      600: "#a55c09",
      700: "#955308",
      800: "#844a07",
      900: "#734006",
    },
  },
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)