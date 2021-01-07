import React from 'react'
import Layout from '../layout'
import img2 from '../../static/images/p2.jpg'

export const Projects: React.FC<{}> = () => {
  return (
    <Layout
      activeLink="Projects"
      titleImage={img2}
      title="Some of our Projects"
      text="Delivering results, reliability, and rock solid dependability."
    ></Layout>
  )
}
