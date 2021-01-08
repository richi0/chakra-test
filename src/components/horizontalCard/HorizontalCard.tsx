import React from 'react'
import {
  Box,
  Center,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react'
import CustomButton from '../customButton'

export interface HorizontalCardProps {
  /**
   * Title of the card
   */
  title: string
  /**
   * Text of the card
   */
  text: string
  /**
   * Image of the card
   */
  img: string
  /**
   * Image on right side?
   */
  right?: boolean
  /**
   * Image on right side?
   */
  href?: string
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  text,
  img,
  right = false,
  href,
}) => {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      gap="20px"
      border="1px"
      borderColor="primary.500"
    >
      <Center order={right ? 1 : 0}>
        <Image maxH="300px" objectFit="scale-down" src={img} alt={title} />
      </Center>
      <Flex direction="column" p="20px">
        <Box my="auto">
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="md">{text}</Text>
        </Box>
        <Spacer />
        {href ? (
          <Box mt="10px">
            <Link href={href}>
              <CustomButton
                label="Learn more"
                mode="primary"
                onClick={() => console.log('a')}
              />
            </Link>
          </Box>
        ) : (
          ''
        )}
      </Flex>
    </SimpleGrid>
  )
}
