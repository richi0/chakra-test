import React from 'react'
import Layout from '../layout'
import img1 from '../../static/images/p1.jpg'
import CardBrowser from '../../components/cardBrowser'
import ImageCard from '../../components/imageCard'
import h1 from '../../static/images/h1.jpg'
import h2 from '../../static/images/h2.jpg'
import h3 from '../../static/images/h3.jpg'
import h4 from '../../static/images/h4.jpg'
import h5 from '../../static/images/h5.jpg'
import h6 from '../../static/images/h6.jpg'
import h7 from '../../static/images/h7.jpg'
import { Text, Box } from '@chakra-ui/react'
import Section from '../../components/section'
import HorizontalCard from '../../components/horizontalCard'

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

const missionData = [
  {
    img: h4,
    title: 'Hard work',
    text: 'Work hard no matter what.',
    right: true,
  },
  {
    img: h5,
    title: 'Hard work',
    text: 'Work hard no matter what.',
    right: false,
  },
  {
    img: h6,
    title: 'Hard work',
    text: 'Work hard no matter what.',
    right: true,
  },
  {
    img: h7,
    title: 'Hard work',
    text: 'Work hard no matter what.',
    right: false,
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
      <Section title="Our core values">
        <CardBrowser
          cards={cardData.map((card, key) => (
            <ImageCard img={card.img} title={card.title} text={card.text} key={key}/>
          ))}
        />
      </Section>
      <Section title="Our mission">
        {missionData.map((card, key) => (
          <Box mb="20px" key={key}>
          <HorizontalCard
            img={card.img}
            title={card.title}
            text={card.text}
            right={card.right}
          />
          </Box>
        ))}
      </Section>
    </Layout>
  )
}
