import React from 'react'
import Layout from '../layout'
import img0 from '../../static/images/p4.jpg'
import Section from '../../components/section'
import TextCard from '../../components/textCard'
import { Box, Flex } from '@chakra-ui/react'
import por1 from '../../static/images/por1.jpg'
import por2 from '../../static/images/por2.jpg'
import por3 from '../../static/images/por3.jpg'
import job1 from '../../static/images/job1.jpg'
import job2 from '../../static/images/job2.jpg'
import job3 from '../../static/images/job3.jpg'
import HorizontalCard from '../../components/horizontalCard'

const employeeData = [
  {
    img: por1,
    title: 'Ketilriðr Filippa',
    text:
      'Random Engineering encourages me to develop my talents while promoting our products and services.',
    href: '',
  },
  {
    img: por2,
    title: 'Bernadett Zotikos',
    text:
      'I am proud to be part of a company that is viewed by customers all over the world as being successful.',
    href: '',
  },
  {
    img: por3,
    title: 'Ifiok Clementina',
    text: 'Random Engineering offers me many opportunities for development.',
    href: '',
  },
]

const positionsData = [
  {
    img: job1,
    title: 'Programmer for CNC-machines',
    text:
      'Develop CNC programs for production runs. Analyze drawings to determine dimensions and to choose cutting tools, machine speeds, and feed rates. Modify existing programs for different machines. Maintain tooling database',
    href: '/',
  },
  {
    img: job2,
    title: 'Mechanical designer',
    text:
      'Create, develop and test products such as machines, tools and sensors. Solve problems by applying the principles of physics, chemistry and mechanics to the real world.',
    href: '/',
  },
  {
    img: job3,
    title: 'Project Engineer',
    text:
      'Develops project objectives by reviewing project proposals and plans and conferring with management. Controls project plan by reviewing design, specifications, and plan, scheduling changes, and recommending actions.',
    href: '/',
  },
]

export const Carrer: React.FC<{}> = () => {
  return (
    <Layout
      activeLink="Carrer"
      titleImage={img0}
      title="Welcome to Random Engineering Careers"
      text="As a leading employer in the urban mobility industry, we look for people who create exceptional value for our customers."
    >
      <Section title="What our employees say">
        <Flex wrap="wrap" p="10px" justifyContent="center">
          {employeeData.map((card, key) => (
            <Box m="10px" key={key}>
              <TextCard
                img={card.img}
                title={card.title}
                text={card.text}
                key={key}
              />
            </Box>
          ))}
        </Flex>
      </Section>
      <Section title="Open positions">
        <Flex wrap="wrap" p="10px" justifyContent="center">
          {positionsData.map((card, key) => (
            <Box m="10px" w="100%" key={key}>
              <HorizontalCard
                img={card.img}
                title={card.title}
                text={card.text}
                href={card.href}
                key={key}
              />
            </Box>
          ))}
        </Flex>
      </Section>
    </Layout>
  )
}
