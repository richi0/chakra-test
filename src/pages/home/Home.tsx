import React from 'react'
import Layout from '../../components/layout'
import TitleImage from '../../components/titleImage'
import img1 from '../../static/images/p1.jpg'

export const Home: React.FC<{}> = () => {
  return (
    <Layout activeLink="Home">
      <TitleImage
        img={img1}
        title="Welcome to RANDOM ENGENEERING"
        text="Bringing your ideas and innovations to life."
      />
    </Layout>
  )
}
