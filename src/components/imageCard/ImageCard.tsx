import React, { useState } from 'react'
import { Text, Center, Image, Link, Box } from '@chakra-ui/react'

export interface ImageCardProps {
  /**
   * Image title
   */
  title: string
  /**
   * Image text
   */
  text: string
  /**
   * Image path
   */
  img: string
  /**
   * Link to details
   */
  href: string
}

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  text,
  img,
  href,
}) => {
  const [style, setStyle] = useState('')
  const enter = () => {
    setStyle('none')
  }
  const leave = () => {
    setStyle('')
  }

  return (
    <Link href={href} onMouseEnter={() => enter()} onMouseLeave={() => leave()}>
      <Box w="300px" h="200px" overflow="hidden" display="inline-block" position="relative">
        <Image objectFit="cover" w="100%" h="100%" src={img} alt="img" />
        <Center
          display={style === 'none' ? 'none' : 'flex'}
          w="100%"
          h="100%"
          position="absolute"
          top="0px"
          left="0px"
          textAlign="center"
        >
          <Text color="white" fontSize="lg">
            {title}
          </Text>
        </Center>
        <Center
          w="100%"
          h="100%"
          position="absolute"
          top="0px"
          left="0px"
          textAlign="center"
          bg="primary.500"
          opacity={0}
          _hover={{ opacity: 0.9 }}
          transitionDuration="1s"
        >
          <Text color="black" fontWeight="bold" fontSize="lg">
            {text}
          </Text>
        </Center>
      </Box>
    </Link>
  )
}
