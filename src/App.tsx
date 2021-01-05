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
      100: "#ce717f",
      200: "#c65a6a",
      300: "#be4255",
      400: "#b62b3f",
      500: "#ae132a",
      600: "#9d1126",
      700: "#8b0f22",
      800: "#7a0d1d",
      900: "#680b19",
    },
    secondary: {
      100: "#beb7b8",
      200: "#b3abac",
      300: "#a89fa0",
      400: "#9d9394",
      500: "#928788",
      600: "#837a7a",
      700: "#756c6d",
      800: "#665f5f",
      900: "#585152",
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