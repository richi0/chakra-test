import React from 'react'
import Section from '../../components/section'
import Layout from '../layout'
import img0 from '../../static/images/p2.jpg'
import TextCard from '../../components/textCard'
import CardBrowser from '../../components/cardBrowser'

import c1 from '../../static/images/customers/1.png'
import c2 from '../../static/images/customers/2.png'
import c3 from '../../static/images/customers/3.png'
import c4 from '../../static/images/customers/4.png'
import c5 from '../../static/images/customers/5.png'
import c6 from '../../static/images/customers/6.png'
import c7 from '../../static/images/customers/7.png'
import c8 from '../../static/images/customers/8.png'
import c9 from '../../static/images/customers/9.png'
import c10 from '../../static/images/customers/10.png'
import c11 from '../../static/images/customers/11.png'
import c12 from '../../static/images/customers/12.png'
import c13 from '../../static/images/customers/13.png'
import c14 from '../../static/images/customers/14.png'
import c15 from '../../static/images/customers/15.png'
import c16 from '../../static/images/customers/16.png'
import c17 from '../../static/images/customers/17.png'
import c18 from '../../static/images/customers/18.png'
import c19 from '../../static/images/customers/19.png'
import c20 from '../../static/images/customers/20.png'

const customerData = [
  {
    img: c1,
    title: 'Apple',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c2,
    title: 'Google',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c3,
    title: 'Microsoft',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c4,
    title: 'Facebook',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c5,
    title: 'Coca Cola',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c6,
    title: 'Samsung',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c7,
    title: 'Walt Disney',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c8,
    title: 'Toyota',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c9,
    title: 'McDonald’s',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c10,
    title: 'AT&T',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c11,
    title: 'Louis Vuitton',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c12,
    title: 'Intel',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c13,
    title: 'Nike',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c14,
    title: 'Cisco',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c15,
    title: 'General Electric',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c16,
    title: 'Mercedes-Benz',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c17,
    title: 'Oracle',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c18,
    title: 'Verizon',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c19,
    title: 'IBM',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
  {
    img: c20,
    title: 'BMW',
    text:
      'Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae.',
  },
]

export const Customers: React.FC<{}> = () => {
  return (
    <Layout
      activeLink="Customers"
      titleImage={img0}
      title="We are proud of our customers"
      text="Make the customer the hero of your story"
    >
      <Section title="Find out what our customers say about Random Engineering">
        <CardBrowser
          cards={customerData.map((card) => (
            <TextCard img={card.img} title={card.title} text={card.text} href="/"/>
          ))}
        />
      </Section>
    </Layout>
  )
}
