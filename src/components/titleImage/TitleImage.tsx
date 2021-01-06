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
    <Box pos="relative">
      <Image w="100%" h="80vh" objectFit="cover" src={img} alt="title image" />
      <Center w="100%" h="100%" position="absolute" top="0px" left="0px">
        <Box textAlign="center">
          <Text fontSize="4xl" color="white">{title}</Text>
          <Text fontSize="lg" color="white">{text}</Text>
        </Box>
      </Center>
    </Box>
  )
}
