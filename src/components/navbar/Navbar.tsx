import React, { useState } from 'react'
import { CustomLink, CustomLinkProps } from '../customLink/CustomLink'
import BurgerMenu from '../burgerMenu'
import Mobilenav from '../mobilenav'
import { Link, Spacer, Image, Box, HStack, Text } from '@chakra-ui/react'

export interface NavbarProps {
  /**
   * Path company logo
   */
  logo: string
  /**
   * Brand name
   */
  brand: string
  /**
   * Navigation links
   */
  links: CustomLinkProps[]
}

export const Navbar: React.FC<NavbarProps> = ({ logo, brand, links }) => {
  const [showMobileNav, setMobileNav] = useState(false)

  const clickBurger = () => {
    setMobileNav(showMobileNav ? false : true)
  }

  return (
    <Box>
      <HStack spacing="20px" bg="gray.100" p="10px" align="center">
        <Link href="/">
          <Image w="50px" src={logo} alt="logo" />
        </Link>
        <Text fontSize="lg">{brand}</Text>
        <Spacer />
        {links.map((link, key) => (
          <Box display={['none', 'none', 'flex']} key={key}>
            <CustomLink
              text={link.text}
              href={link.href}
              active={link.active ? true : false}
            />
          </Box>
        ))}
        <Box display={['block', 'block', 'none']}>
          <BurgerMenu onClick={() => clickBurger()} />
        </Box>
      </HStack>
      <Box position="relative">
        <Mobilenav
          show={showMobileNav}
          links={links}
          toggleShowMenu={() => clickBurger()}
        />
      </Box>
    </Box>
  )
}
