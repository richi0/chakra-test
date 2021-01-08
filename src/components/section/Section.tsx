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
    <Box
      as="section"
      my="40px"
      mx={['5px', '5px', '10px', 'auto']}
      p={['5px', '5px', '10px', '20px']}
      shadow="xl"
      maxW="1000px"
    >
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
