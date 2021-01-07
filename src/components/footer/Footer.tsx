import React from 'react'
import {
  Text,
  Box,
  SimpleGrid,
  List,
  ListItem,
  Center,
} from '@chakra-ui/react'
import {SocialMediaBadge, SocialMediaBadgeProps} from '../socialMediaBadge/SocialMediaBadge'
import { CustomLink, CustomLinkProps } from '../customLink/CustomLink'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

export interface FooterProps {
  /**
   * Navigation links
   */
  links: CustomLinkProps[]
  /**
   * Social media links
   */
  social: SocialMediaBadgeProps[]
  /**
   * Phone number
   */
  phone: string
  /**
   * Email address
   */
  email: string
  /**
   * Postal address
   */
  address: string[]

}

export const Footer: React.FC<FooterProps> = ({ links, social, phone, email, address }) => {
  return (
    <SimpleGrid p="20px" gap="20px" columns={[1, 1, 3]} w="100%" bg="gray.100">
      <Box textAlign="center">
        <Text mb="10px" fontSize="xl" fontWeight="bold" textDecor="underline">
          Navigation
        </Text>
        <List>
          <ListItem></ListItem>
          {links.map((link, key) => (
            <ListItem key={key}>
              <CustomLink
                href={link.href}
                text={link.text}
                active={link.active}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box textAlign="center">
        <Text mb="10px" fontSize="xl" fontWeight="bold" textDecor="underline">
          Social Media
        </Text>
        <Center>
          {social.map((company, key) => (
            <Box mx="5px" key={key}>
              <SocialMediaBadge option={company.option} href={company.href} />
            </Box>
          ))}
        </Center>
      </Box>
      <Box textAlign="center">
        <Text mb="10px" fontSize="xl" fontWeight="bold" textDecor="underline">
          Contact
        </Text>
        <Center mb="20px">
          <PhoneIcon boxSize="30px" mr="20px" />
          <Text>{phone}</Text>
        </Center>
        <Center mb="20px"> 
          <EmailIcon boxSize="30px" mr="20px"/>
          <Text>{email}</Text>
        </Center>
        <Box mt="20px" fontWeight="bold">
          {address.map((line, key) => <Text key={key}>{line}</Text>)}
        </Box>
      </Box>
    </SimpleGrid>
  )
}
