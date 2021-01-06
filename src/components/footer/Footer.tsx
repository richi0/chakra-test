import React from 'react'
import { Box, Center } from '@chakra-ui/react'

export interface FooterProps {
  /**
   * Prop1
   */
  prop1: string
}

export const Footer: React.FC<FooterProps> = ({ prop1 }) => {
  return <Center w="100%" bg="gray.100">{prop1}</Center>
}