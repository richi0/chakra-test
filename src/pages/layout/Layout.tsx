import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import logo from '../../static/images/logo.svg'
import TitleImage from '../../components/titleImage'

export interface LayoutProps {
  /**
   * Active link
   */
  activeLink: string
  /**
   * Title image path
   */
  titleImage: string
  /**
   * Site title
   */
  title: string
  /**
   * Site title text
   */
  text: string
}

const links = [
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

const social = [
  {
    option: 'facebook',
    href: 'https://facebook.com',
  },
  {
    option: 'twitter',
    href: 'https://twitter.com',
  },
  {
    option: 'instagram',
    href: 'https://instagram.com',
  },
  {
    option: 'linkedin',
    href: 'https://linkedin.com',
  },
  {
    option: 'youtube',
    href: 'https://youtube.com',
  },
]

export const Layout: React.FC<LayoutProps> = ({ activeLink, titleImage, title, text, children }) => {
  const activeLinkMarked = links.map((link) =>
    link.text === activeLink
      ? { text: link.text, href: link.href, active: true }
      : link,
  )
  return (
    <Flex w="100%" h="100%" direction="column">
      <Navbar links={activeLinkMarked} logo={logo} brand="Random Engineering" />
      <TitleImage
        img={titleImage}
        title={title}
        text={text}
      />
      <Box>{children}</Box>
      <Spacer />
      <Footer
        links={activeLinkMarked}
        social={social}
        phone="+41 24 472 65 41"
        email="contact@random-engineering.com"
        address={['1600 Pennsylvania Avenue NW', 'Washington, DC 20500', 'USA']}
      />
    </Flex>
  )
}
