import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Carrer } from './Carrer'

export default {
  title: 'Pages/Carrer',
  component: Carrer,
} as Meta

const Template: Story<{}> = (args) => <Carrer {...args} />

export const Carrer_1 = Template.bind({})
Carrer_1.args = {}
