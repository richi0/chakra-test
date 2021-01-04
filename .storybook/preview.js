import { addDecorator } from '@storybook/react'
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

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

addDecorator((storyFn) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ChakraProvider>
))
