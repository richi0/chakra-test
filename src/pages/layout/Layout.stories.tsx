import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Layout, LayoutProps } from './Layout'
import img1 from '../../static/images/p1.jpg'
import img2 from '../../static/images/p2.jpg'

export default {
  title: 'Pages/Layout',
  component: Layout,
} as Meta

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const Layout_1 = Template.bind({})
Layout_1.args = {
  activeLink: 'About',
  titleImage: img1,
  title: 'Welcome to RANDOM ENGENEERING',
  text: 'Bringing your ideas and innovations to life.',
}

export const Layout_2 = Template.bind({})
Layout_2.args = {
  activeLink: 'Projects',
  titleImage: img2,
  title: 'These are our projects',
  text: 'Feel free to look around',
}
