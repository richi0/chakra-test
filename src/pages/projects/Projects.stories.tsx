import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Projects, ProjectsProps } from './Projects'

export default {
  title: 'Components/Pages',
  component: Projects,
} as Meta

const Template: Story<ProjectsProps> = (args) => <Projects {...args} />

export const Projects_1 = Template.bind({})
Projects_1.args = {
  prop1: "prop1"
}
