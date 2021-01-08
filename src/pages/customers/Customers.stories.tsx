import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Customers} from './Customers'

export default {
  title: 'Pages/Customers',
  component: Customers,
} as Meta

const Template: Story<{}> = (args) => <Customers {...args} />

export const Customers_1 = Template.bind({})
Customers_1.args = {}
