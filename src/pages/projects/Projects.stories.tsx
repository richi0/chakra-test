import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Projects } from './Projects'

export default {
  title: 'Pages/Projects',
  component: Projects,
} as Meta

const Template: Story<{}> = (args) => <Projects {...args} />

export const Projects_1 = Template.bind({})
Projects_1.args = {}
