import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Career } from './Career'

export default {
  title: 'Pages/Carrer',
  component: Career,
} as Meta

const Template: Story<{}> = (args) => <Career {...args} />

export const Carrer_1 = Template.bind({})
Carrer_1.args = {}
