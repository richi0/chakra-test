import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

export interface TitleImageProps {
  /**
   * Image
   */
  img: string
  /**
   * Title
   */
  title: string
  /**
   * Text
   */
  text: string
}

export const TitleImage: React.FC<TitleImageProps> = ({ img, title, text }) => {
  return (
    <Box as="section" pos="relative">
      <Image w="100%" h="80vh" objectFit="cover" src={img} alt="title image" />
      <Center w="100%" h="100%" position="absolute" top="0px" left="0px">
        <Box textAlign="center">
          <Text as="h1" p="20px" fontSize="4xl" color="white">{title}</Text>
          <Text p="20px" fontSize="xl" color="white" fontWeight="bold">{text}</Text>
        </Box>
      </Center>
    </Box>
  )
}
