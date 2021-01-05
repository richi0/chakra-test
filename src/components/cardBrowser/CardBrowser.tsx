import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, SimpleGrid } from '@chakra-ui/react'
import styles from './CardBrowser.module.css'

export interface CardBrowserProps {
  /**
   * Array of cards
   */
  cards: React.ReactNode[]
}

interface CradBrowserState {
  cardNumber: number
  pos: number
}

export class CardBrowser extends React.Component<
  CardBrowserProps,
  CradBrowserState
> {
  state: CradBrowserState = {
    cardNumber: 0,
    pos: 0,
  }

  browserRef = React.createRef<HTMLDivElement>()
  cardRef = this.props.cards.map(() => React.createRef<HTMLDivElement>())

  changeCard(n: number) {
    if (n === 1 && this.state.cardNumber < this.props.cards.length - 1) {
      this.setState({ cardNumber: this.state.cardNumber + 1 }, () => {
        this.moveCard(1)
      })
    }
    if (n === -1 && this.state.cardNumber > 0) {
      this.setState({ cardNumber: this.state.cardNumber - 1 }, () =>
        this.moveCard(-1),
      )
    }
  }

  moveCard(n: number) {
    if (this.props.cards.length > 1) {
      let browser = this.browserRef.current
      let card_0 = this.cardRef[0].current
      let card_1 = this.cardRef[1].current
      if (card_0 && card_1 && browser) {
        let diff = Math.abs(
          card_0.getBoundingClientRect().left -
            card_1.getBoundingClientRect().left,
        )
        browser.style.transform = `translate(${
          this.state.pos - diff * n
        }px, 0px)`
        this.setState({ pos: -(diff * this.state.cardNumber) })
      }
    }
  }

  render() {
    return (
      <Box>
        <SimpleGrid
          position="relative"
          display={['none', 'none', 'grid']}
          columns={[1, 1, 2, 2, 3]}
          gap="30px"
          justifyItems="center"
        >
          {this.props.cards.map((card, key) => (
            <Box key={key}>{card}</Box>
          ))}
        </SimpleGrid>
        <Box
          display={['block', 'block', 'none']}
          className={`${styles.browser}`}
        >
          <Flex dir="row" transitionDuration="0.5s" ref={this.browserRef}>
            {this.props.cards.map((card, index) => (
              <Box key={index} ref={this.cardRef[index]}>
                <Center width="100vw">{card}</Center>
              </Box>
            ))}
          </Flex>
          <Flex justifyContent="space-between" mt="20px">
            <Box
              as="button"
              ml="10px"
              _focus={{ outline: 'none' }}
              transitionDuration="0.5s"
              _hover={
                this.state.cardNumber === 0
                  ? { cursor: 'default' }
                  : { transform: 'translateX(-5px)' }
              }
              onClick={() => this.changeCard(-1)}
            >
              <ArrowLeftIcon
                boxSize="30px"
                color={this.state.cardNumber === 0 ? 'gray.400' : 'black'}
                _hover={
                  this.state.cardNumber === 0 ? {} : { color: 'primary.500' }
                }
              />
            </Box>
            <Center>{`${this.state.cardNumber + 1} of ${
              this.props.cards.length
            }`}</Center>
            <Box
              as="button"
              mr="10px"
              _focus={{ outline: 'none' }}
              transitionDuration="0.5s"
              _hover={
                this.state.cardNumber === this.props.cards.length - 1
                  ? { cursor: 'default' }
                  : { transform: 'translateX(5px)' }
              }
              onClick={() => this.changeCard(1)}
            >
              <ArrowRightIcon
                boxSize="30px"
                color={
                  this.state.cardNumber === this.props.cards.length - 1
                    ? 'gray.400'
                    : 'black'
                }
                _hover={
                  this.state.cardNumber === this.props.cards.length - 1
                    ? {}
                    : { color: 'primary.500' }
                }
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    )
  }
}
