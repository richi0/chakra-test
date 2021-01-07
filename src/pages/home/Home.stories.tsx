import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Home } from './Home'

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta

const Template: Story<{}> = (args) => <Home {...args} />

export const Home_1 = Template.bind({})
Home_1.args = {}
