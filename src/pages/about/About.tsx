import React from 'react'
import Section from '../../components/section'
import Layout from '../layout'
import img0 from '../../static/images/p6.jpg'
import TextCard from '../../components/textCard'
import { Box, Flex } from '@chakra-ui/react'
import ImageCard from '../../components/imageCard'

import emp1 from '../../static/images/emp1.jpg'
import emp2 from '../../static/images/emp2.jpg'
import emp3 from '../../static/images/emp3.jpg'
import emp4 from '../../static/images/emp4.jpg'
import emp5 from '../../static/images/emp5.jpg'
import emp6 from '../../static/images/emp6.jpg'
import emp7 from '../../static/images/emp7.jpg'
import emp8 from '../../static/images/emp8.jpg'
import emp9 from '../../static/images/emp9.jpg'
import CardBrowser from '../../components/cardBrowser'

const aboutData = [
  {
    title: 'History',
    text:
      'Random Engineering was founded in 1932 in Harare, Zimbabwe, and is one of the leading manufacturers of elevators, escalators, and moving walkways, as well as a top provider of vertical transportation maintenance and modernization across the globe. The Group has over 1,000 branch offices in more than 100 countries, in addition to production sites as well as research and development centers in Brazil, China, Europe, India, and the United States.',
  },
  {
    title: 'Trusded',
    text:
      'Trust is always the hardest value to earn in a relationship, and the easiest to lose.We know that success depends on earning the confidence of our customers by providing them with quality products, services and solutions that bring them value and peace of mind.And trust is built upon over 145 years of unbroken service, and continuous, family-owned management. We respect our heritage and remain true to our legacy of trust. And we know that we have to keep earning that trust every day.',
  },
  {
    title: 'Professional',
    text:
      'We have over 30,000 specialist engineers, and every one of them is fully trained, certified and re-trained regularly to keep them up to date with the latest technologies, regulations and codes. Behind them, experts from complementary disciplines add their own vital contributions to ensure quality, customer focus and continuous improvement in R&D, training, IT, marketing, testing, and much more. We strive always to be a professional partner to our customers, by adding value to their business, and adding quality to the infrastructure of the urban world.',
  },
  {
    title: 'Smart',
    text:
      'Random Engineering has pioneered the elevator and escalator industry in developing intelligent, integrated and innovative mobility solutions. The PORT Technology and myPORT integrated building and elevator control systems lead the world in providing high-performance, high-security mobility in complex contemporary buildings. And Random Engineering Ahead has established us as leaders in adding elevators and escalators to the Internet of Things. Smart solutions come from smart people with smart ideas and the encouragement to develop them. We will always be enablers of smartness.',
  },
  {
    title: 'Safety',
    text:
      'More than 66,000 employees work around the clock to serve 1.5 billion people using our elevators and escalators everyday. Safety for each one of our customers and employees is first and foremost.',
  },
  {
    title: 'Values',
    text:
      'Our present-day success is driven by our commitment to traditional core values such as customer service, quality and safety, combined with our key strengths of creativity and innovation to produce intelligent solutions in response to customer needs. Our values describe how Random Engineering, as a company, and our employees behave, and are the principles upon which our business relationships are based',
  },
]

const employeeData = [
  {
    img: emp1,
    title: 'Predrag Birgir',
    text:
      'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!',
  },
  {
    img: emp2,
    title: 'Rosemarie Jarmila',
    text:
      'Better to remain silent and be thought a fool than to speak out and remove all doubt.',
  },
  {
    img: emp3,
    title: 'Svjetlana Enid',
    text: 'If I were two-faced, would I be wearing this one?',
  },
  {
    img: emp4,
    title: 'Florina Linda',
    text: 'The best thing about the future is that it comes one day at a time.',
  },
  {
    img: emp5,
    title: 'Meridith Martyna',
    text: 'The only mystery in life is why the kamikaze pilots wore helmets.',
  },
  {
    img: emp6,
    title: 'Gathbiyya Fizza',
    text:
      'Light travels faster than sound. This is why some people appear bright until you hear them speak.',
  },
  {
    img: emp7,
    title: 'Heta Gerhild',
    text:
      'Nobody realizes that some people expend tremendous energy merely to be normal.',
  },
  {
    img: emp8,
    title: 'Vaihere Geir',
    text:
      'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.',
  },
  {
    img: emp9,
    title: 'Malati Marina',
    text: 'All the things I really like to do are either immoral, illegal or fattening.',
  },
]

export const About: React.FC<{}> = () => {
  return (
    <Layout
      activeLink="About"
      titleImage={img0}
      title="About us"
      text="For the success path of life."
    >
      <Section title="Our Story and our values">
        <Flex wrap="wrap" p="10px" justifyContent="center">
          {aboutData.map((card, key) => (
            <Box m="10px" key={key}>
              <TextCard title={card.title} text={card.text} />
            </Box>
          ))}
        </Flex>
      </Section>
      <Section title="Employees of the Month">
        <CardBrowser
          cards={employeeData.map((card, key) => (
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
