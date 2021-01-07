import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export interface CustomLinkProps {
  /**
   * Text of the link
   */
  text: string
  /**
   * Href of the link
   */
  href: string
  /**
   * Link is active / You are on the page the link links to.
   */
  active?: boolean
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  text,
  active = false,
}) => {
  return (
    <RouterLink to={href}>
      <Box
        href={href}
        color={active ? 'primary.500' : 'secondary.500'}
        fontSize="lg"
        _hover={{ color: 'primary.500', textDecor: 'underline' }}
      >
        {text.toUpperCase()}
      </Box>
    </RouterLink>
  )
}
