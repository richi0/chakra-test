import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { About } from './About'

export default {
  title: 'Components/About',
  component: About,
} as Meta

const Template: Story<{}> = (args) => <About {...args} />

export const About_1 = Template.bind({})
About_1.args = {}
