import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Contact } from './Contact'

export default {
  title: 'Pages/Contact',
  component: Contact,
} as Meta

const Template: Story<{}> = (args) => <Contact {...args} />

export const Contact_1 = Template.bind({})
Contact_1.args = {}
