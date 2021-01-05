import React from 'react'
import { Link, Center, Image, Text, VStack } from '@chakra-ui/react'

export interface TextCardProps {
  /**
   * Title of the card
   */
  title: string
  /**
   * Image of the card
   */
  img?: string
  /**
   * Main text of the card
   */
  text: string
  /**
   * Url to the details
   */
  href?: string
}

export const TextCard: React.FC<TextCardProps> = ({
  title,
  img,
  text,
  href,
}) => {
  let base = (
    <VStack
      spacing="20px"
      shadow="lg"
      p="20px"
      _hover={
        href
          ? {
              transform: 'translateY(-5px)',
              transitionDuration: '0.5s',
              shadow: 'xl',
            }
          : {}
      }
    >
      <Center textAlign="center">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Center>
      <Center>{img ? <Image src={img} alt="img" /> : ''}</Center>
      <Center>
        <Text>{text}</Text>
      </Center>
    </VStack>
  )

  base = href ? (
    <Link href={href} _hover={{ textDecor: 'none' }}>
      {base}
    </Link>
  ) : (
    base
  )

  return base
}
