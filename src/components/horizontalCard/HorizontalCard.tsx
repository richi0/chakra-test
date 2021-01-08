import React from 'react'
import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react'
import CustomButton from '../customButton'
import { Link as RouterLink } from 'react-router-dom'

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
    <Flex
      border="1px"
      borderColor="primary.500"
      direction={['column', 'column', 'row']}
    >
      <Flex
        order={right ? 1 : 0}
        w={['100%', '100%', '50%']}
        justifyContent={['center', 'center', right ? 'flex-end' : 'flex-start']}
        minW="40%"
        alignItems="center"
      >
        <Image src={img} alt={title} maxH={["auto", "auto", "300px"]} />
      </Flex>
      <Flex maxW={['100%', '100%', '100%']} direction="column" p="20px">
        <Box my="auto">
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="md">{text}</Text>
        </Box>
        <Spacer />
        {href ? (
          <Flex mt="10px" alignSelf={right? "flex-start": "flex-end"}>
            <RouterLink to={href}>
              <CustomButton
                label="Learn more"
                mode="primary"
                onClick={() => null}
              />
            </RouterLink>
          </Flex>
        ) : (
          ''
        )}
      </Flex>
    </Flex>
  )
}
