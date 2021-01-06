  import React, { useState, useEffect } from 'react'
  import { Box, Center, CloseButton, Divider, Flex } from '@chakra-ui/react'
  import { CustomLink, CustomLinkProps } from '../customLink/CustomLink'
  import styles from './Mobilenav.module.css'

  export interface MobilenavProps {
    /**
     * Show or hide the navigation
     */
    show: boolean
    /**
     * Navigation links
     */
    links: CustomLinkProps[]
    /**
     * Toggle between show the menu on and off
     */
    toggleShowMenu: () => void
  }

  export const Mobilenav: React.FC<MobilenavProps> = ({
    show,
    links,
    toggleShowMenu,
  }) => {
    const [style, setStyle] = useState(styles.hidden)

    useEffect(() => {
      if (show) {
        setStyle(styles.shown)
      } else {
        setStyle(styles.hidden)
      }
    }, [show])

    return (
      <Box
        w="full"
        direction="column"
        bg="gray.100"
        className={`${style} ${styles.menu}`}
      >
        <Flex direction="row-reverse">
          <CloseButton
            boxSize="40px"
            onClick={toggleShowMenu}
            _focus={{ outline: 'none' }}
            _hover={{ color: 'primary.500' }}
          />
        </Flex>
        {links.map((link, key) => (
          <Box key={key}>
            <Center>
              <CustomLink href={link.href} text={link.text} active={link.active} />
            </Center>
            <Center>
              <Divider my="10px" borderColor="black" w={0.8} />
            </Center>
          </Box>
        ))}
      </Box>
    )
  }
