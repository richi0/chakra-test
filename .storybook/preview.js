import { addDecorator } from '@storybook/react'
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

addDecorator((storyFn) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ChakraProvider>
))
