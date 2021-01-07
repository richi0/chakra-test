import React from 'react'
import {
  Text,
  Box,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react'
import SocialMediaBadge from '../socialMediaBadge'
import { CustomLinkProps } from '../customLink/CustomLink'

export interface FooterProps {
  /**
   * Navigation links
   */
  links: CustomLinkProps[]
}

const social = ['facebook', 'instagram', 'twitter', 'youtube', 'linkedin']

export const Footer: React.FC<FooterProps> = ({ links }) => {
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
              <Link href={link.href}>{link.text}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box textAlign="center">
        <Text mb="10px" fontSize="xl" fontWeight="bold" textDecor="underline">
          Contact
        </Text>
        <Text>Mob: +12 3456 789</Text>
      </Box>
      <Box textAlign="center">
        <Text mb="10px" fontSize="xl" fontWeight="bold" textDecor="underline">
          Social Media
        </Text>
        <Center>
          <Wrap>
            {social.map((name, key) => (
              <WrapItem key={key}>
                <SocialMediaBadge option={name} href={`https://${name}.com`} />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </Box>
    </SimpleGrid>
  )
}
