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
import { Box } from '@chakra-ui/react'
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
    title: 'Build the future',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, odio at cursus auctor, justo neque finibus odio, et posuere mauris lacus porta elit. Duis varius eu metus vel tristique. Ut sollicitudin enim sed hendrerit fringilla. Nulla non nisi lectus. Aenean libero tellus, faucibus ut quam ac, ullamcorper pretium diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nunc odio, egestas at tempor et, rhoncus a ante.',
    right: true,
    href: "/Projects"
  },
  {
    img: h5,
    title: 'Networking',
    text:
      'In mattis, augue vel iaculis auctor, mauris lacus euismod lacus, a viverra ante metus in odio. Ut vulputate sodales iaculis. Nullam euismod quis turpis non dignissim. Maecenas nec dignissim odio, tristique malesuada justo. Mauris elementum commodo odio, non blandit purus suscipit eu. Sed cursus lectus magna, non porta mi pellentesque suscipit. Mauris interdum, lacus id gravida ullamcorper, diam velit mollis nisi, eget pellentesque arcu ipsum et libero.',
    right: false,
    href: "/Customers"
  },
  {
    img: h6,
    title: 'Stay connected',
    text:
      'Morbi in fermentum tellus. Duis cursus, quam non tristique sollicitudin, arcu diam condimentum nibh, ac scelerisque massa turpis at dui. Donec nisi mi, pharetra id porttitor vitae, maximus non arcu. Proin vestibulum ipsum eu orci lacinia, ut fringilla erat finibus. In venenatis odio sed porttitor iaculis. Morbi cursus arcu sit amet purus consectetur laoreet. Fusce nec justo augue. Proin volutpat ipsum leo, eu pharetra eros accumsan et.',
    right: true,
    href: "/Contact"
  },
  {
    img: h7,
    title: 'Build great teams',
    text:
      'Nunc faucibus vel lectus id dignissim. Maecenas ullamcorper, lorem et fermentum porta, sem odio malesuada sapien, ac facilisis elit nunc et orci. Donec eleifend justo ut rutrum pretium. Fusce placerat lorem ac dui hendrerit lacinia. Aenean odio diam, ultrices in diam in, laoreet vulputate turpis. Pellentesque nisl ante, tincidunt at elit vitae, porttitor consequat ex. Etiam tempor hendrerit turpis, at pulvinar velit posuere sed.',
    right: false,
    href: "/Carrer"
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
      <Section title="Our mission">
        {missionData.map((card, key) => (
          <Box mb="20px" key={key}>
            <HorizontalCard
              img={card.img}
              title={card.title}
              text={card.text}
              right={card.right}
              href={card.href}
            />
          </Box>
        ))}
      </Section>
      <Section title="Our core values">
        <CardBrowser
          cards={cardData.map((card, key) => (
            <ImageCard
              img={card.img}
              title={card.title}
              text={card.text}
              key={key}
            />
          ))}
        />
      </Section>
    </Layout>
  )
}
