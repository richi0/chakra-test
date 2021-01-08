import React from 'react'
import Layout from '../layout'
import img0 from '../../static/images/p2.jpg'
import img1 from '../../static/images/pro1.jpg'
import img2 from '../../static/images/pro2.jpg'
import img3 from '../../static/images/pro3.jpg'
import img4 from '../../static/images/pro4.jpg'
import img5 from '../../static/images/pro5.jpg'
import Section from '../../components/section'
import HorizontalCard from '../../components/horizontalCard'
import { Box } from '@chakra-ui/react'

const projectsData = [
  {
    img: img2,
    title: 'Rapid prototyping',
    text:
      'In mattis, augue vel iaculis auctor, mauris lacus euismod lacus, a viverra ante metus in odio. Ut vulputate sodales iaculis. Nullam euismod quis turpis non dignissim. Maecenas nec dignissim odio, tristique malesuada justo. Mauris elementum commodo odio, non blandit purus suscipit eu. Sed cursus lectus magna, non porta mi pellentesque suscipit. Mauris interdum, lacus id gravida ullamcorper, diam velit mollis nisi, eget pellentesque arcu ipsum et libero.',
    right: false,
    href:""
  },
  {
    img: img3,
    title: 'Mechanical design',
    text:
      'Morbi in fermentum tellus. Duis cursus, quam non tristique sollicitudin, arcu diam condimentum nibh, ac scelerisque massa turpis at dui. Donec nisi mi, pharetra id porttitor vitae, maximus non arcu. Proin vestibulum ipsum eu orci lacinia, ut fringilla erat finibus. In venenatis odio sed porttitor iaculis. Morbi cursus arcu sit amet purus consectetur laoreet. Fusce nec justo augue. Proin volutpat ipsum leo, eu pharetra eros accumsan et.',
    right: true,
    href:""
  },
  {
    img: img1,
    title: 'Automatisation of mass production',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, odio at cursus auctor, justo neque finibus odio, et posuere mauris lacus porta elit. Duis varius eu metus vel tristique. Ut sollicitudin enim sed hendrerit fringilla. Nulla non nisi lectus. Aenean libero tellus, faucibus ut quam ac, ullamcorper pretium diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nunc odio, egestas at tempor et, rhoncus a ante.',
    right: false,
    href:""
  },
  {
    img: img4,
    title: 'Creation of CAD-Data and technical drawings',
    text:
      'Nunc faucibus vel lectus id dignissim. Maecenas ullamcorper, lorem et fermentum porta, sem odio malesuada sapien, ac facilisis elit nunc et orci. Donec eleifend justo ut rutrum pretium. Fusce placerat lorem ac dui hendrerit lacinia. Aenean odio diam, ultrices in diam in, laoreet vulputate turpis. Pellentesque nisl ante, tincidunt at elit vitae, porttitor consequat ex. Etiam tempor hendrerit turpis, at pulvinar velit posuere sed.',
    right: true,
    href:""
  },
  {
    img: img5,
    title: 'Automation of medical testing process',
    text:
      'Morbi in fermentum tellus. Duis cursus, quam non tristique sollicitudin, arcu diam condimentum nibh, ac scelerisque massa turpis at dui. Donec nisi mi, pharetra id porttitor vitae, maximus non arcu. Proin vestibulum ipsum eu orci lacinia, ut fringilla erat finibus. In venenatis odio sed porttitor iaculis. Morbi cursus arcu sit amet purus consectetur laoreet. Fusce nec justo augue. Proin volutpat ipsum leo, eu pharetra eros accumsan et.',
    right: false,
    href:""
  },
]
export const Projects: React.FC<{}> = () => {
  return (
    <Layout
      activeLink="Projects"
      titleImage={img0}
      title="Some of our Projects"
      text="Delivering results, reliability, and rock solid dependability."
    >
      <Section title="A selection of some of our projects">
        {projectsData.map((card, key) => (
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
    </Layout>
  )
}
