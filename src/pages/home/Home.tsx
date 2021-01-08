import React from 'react'
import Layout from '../layout'
import img1 from '../../static/images/p1.jpg'
import CardBrowser from '../../components/cardBrowser'
import ImageCard from '../../components/imageCard'
import h1 from '../../static/images/h1.jpg'
import h2 from '../../static/images/h2.jpg'
import h3 from '../../static/images/h3.jpg'
import { Box } from '@chakra-ui/react'

const cardData = [
  {
    img: h1,
    title: 'Hard work',
    text: 'Work hard no matter what.',
  },
  {
    img: h2,
    title: 'Experience',
    text: 'We have over 40 years of experience in the industry.',
  },
  {
    img: h3,
    title: 'Quality',
    text: 'Our concern is quality not quantity.',
  },
]

export const Home: React.FC<{}> = () => {
  return (
    <Layout
      activeLink="Home"
      titleImage={img1}
      title="Welcome to RANDOM ENGENEERING"
      text="Bringing your ideas and innovations to life."
    >
      <Box p="30px" w="100%" mx="auto">
        <CardBrowser
          cards={cardData.map((card) => (
            <ImageCard img={card.img} title={card.title} text={card.text} />
          ))}
        />
      </Box>
    </Layout>
  )
}
