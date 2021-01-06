import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import logo from '../../static/images/logo.svg'

export interface LayoutProps {
  /**
   * Active link
   */
  activeLink: string
}

export const links = [
  {
    text: 'Home',
    href: '/home',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Customers',
    href: '/Customers',
  },
  {
    text: 'Carrer',
    href: '/carrer',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
]

export const Layout: React.FC<LayoutProps> = ({ activeLink, children }) => {
  return (
    <Flex w="100%" h="100%" direction="column">
      <Navbar
        links={links.map((link) =>
          link.text === activeLink
            ? { text: link.text, href: link.href, active: true }
            : link,
        )}
        logo={logo}
        brand="Random Engineering"
      />
      <Box>{children}</Box>
      <Spacer />
      <Footer prop1="aaa" />
    </Flex>
  )
}
