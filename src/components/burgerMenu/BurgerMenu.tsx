import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import styles from './BurgerMenu.module.css'

export interface BurgerMenuProps {
  /**
   * Click handler
   */
  onClick: () => void
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  const [spin, setSpin] = useState('')
  const rotate = () => {
    setSpin(spin ? '' : styles.menu)
    setTimeout(() => {
      setSpin('')
      onClick()
    }, 1000)
    console.log('rotate')
  }
  return (
    <Box
      className={`${spin}`}
      onClick={() => {
        rotate()
      }}
      boxSize={50}
    >
      <HamburgerIcon
        boxSize={50}
        color="secondary.500"
        _hover={{ color: 'primary.500' }}
      />
    </Box>
  )
}