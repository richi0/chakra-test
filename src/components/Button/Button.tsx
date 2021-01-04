import React from 'react'
import {
  Box,
} from "@chakra-ui/react"

export interface ButtonProps {
  /**
   * Prop1
   */
  prop1: string
}

export const Button: React.FC<ButtonProps> = ({ prop1 }) => {
  return <Box bg="red.400" p="10px">Test1</Box>
}
