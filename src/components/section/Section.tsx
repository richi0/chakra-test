import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export interface SectionProps {
  /**
   * Title
   */
  title: string
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Box as="section" m="20px" p="20px" shadow="xl">
      <Text
        fontSize="2xl"
        color="primary.500"
        fontWeight="bold"
        textAlign="center"
      >
        {title}
      </Text>
      <Box
        w="80%"
        h="10px"
        mx="auto"
        mb="10px"
        bgGradient="linear(to-r, secondary.700, white)"
      />
      {children}
    </Box>
  )
}
