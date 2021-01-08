import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Center, Flex } from '@chakra-ui/react'
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

  cardRef = this.props.cards.map(() => React.createRef<HTMLDivElement>())

  /**
   * Resets the translation if a user resizes
   * the window. Otherwise the image scrolls
   * and is not in the center anymore.
   */
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ cardNumber: 0, pos: 0 })
    })
  }

  /**
   * Change the card number to the next higer or the next lower card
   * if the card number is not on the top or bottom limit.
   */
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

  /**
   * Translate the imagebrowser to show the next image
   */
  moveCard(n: number) {
    if (this.props.cards.length > 1) {
      let card_0 = this.cardRef[0].current
      let card_1 = this.cardRef[1].current
      if (card_0 && card_1) {
        let diff = Math.abs(
          card_0.getBoundingClientRect().left -
            card_1.getBoundingClientRect().left,
        )
        this.setState({ pos: -(diff * this.state.cardNumber) })
      }
    }
  }

  render() {
    return (
      <Box>
        <Center>
          <Flex
            display={['none', 'none', 'flex']}
            wrap="wrap"
            direction="row"
            justifyContent="center"
            justifyItems="center"
            sx={{ gap: '30px' }}
          >
            {this.props.cards.map((card, key) => (
              <Box key={key}>{card}</Box>
            ))}
          </Flex>
        </Center>
        <Box
          display={['block', 'block', 'none']}
          className={`${styles.browser}`}
          overflow="hidden"
          w="100%"
        >
          <Flex
            w="100%"
            direction="row"
            transitionDuration="0.5s"
            transform={`translate(${this.state.pos}px, 0px)`}
          >
            {this.props.cards.map((card, index) => (
              <Center
                mr="10px"
                className={`${styles.flexElement}`}
                key={index}
                ref={this.cardRef[index]}
              >
                {card}
              </Center>
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
