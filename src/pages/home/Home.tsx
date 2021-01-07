import React from 'react'
import Layout from '../layout'
import img1 from '../../static/images/p1.jpg'

export const Home: React.FC<{}> = () => {
  return (
    <Layout
      activeLink="Home"
      titleImage={img1}
      title="Welcome to RANDOM ENGENEERING"
      text="Bringing your ideas and innovations to life."
    ></Layout>
  )
}
