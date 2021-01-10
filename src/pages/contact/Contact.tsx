import React from 'react'
import Section from '../../components/section'
import Layout from '../layout'
import img0 from '../../static/images/p9.jpg'
import { Flex } from '@chakra-ui/react'
import CustomForm from '../../components/customForm'

const inputs = [
  {
    label: 'Company',
    type: 'text',
  },
  {
    label: 'Name',
    type: 'text',
  },
  {
    label: 'Email',
    type: 'email',
  },
  {
    label: 'Phone number',
    type: 'tel',
    help: 'Format +(xx) xx xxx xx xx',
  },
  {
    label: 'Message',
    type: 'text',
    area: true,
  },
]

export const Contact: React.FC<{}> = () => {
  const proccessFromData = (data: object[]) => console.log(data)

  return (
    <Layout
      activeLink="Contact"
      titleImage={img0}
      title="Contact us"
      text="Personalized Service, Deserving results"
    >
      <Section title="Contact us today">
        <CustomForm
          title="Contact Form"
          inputs={inputs}
          sendSubmit={proccessFromData}
          submitText="Send"
        />
      </Section>
      <Section title="Where you find us">
        <Flex w="100%" minH={['200px', '300px', '400px']}>
          <iframe
            title="map"
            style={{ width: '100%' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.140988862469!2d14.487870515118377!3d35.91904888013946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4541ffb352f5%3A0x8776df1e1ec665f0!2sLOVE%20Monument!5e0!3m2!1sde!2smt!4v1610192122383!5m2!1sde!2smt"
            aria-hidden="false"
          ></iframe>
        </Flex>
      </Section>
    </Layout>
  )
}
