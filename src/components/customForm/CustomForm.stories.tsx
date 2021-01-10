import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CustomForm, CustomFormProps } from './CustomForm'

export default {
  title: 'Components/CustomForm',
  component: CustomForm,
} as Meta

const Template: Story<CustomFormProps> = (args) => <CustomForm {...args} />

export const CustomForm_1 = Template.bind({})
CustomForm_1.args = {
  title: 'Contact form',
  inputs: [
    { label: 'User name', type: 'text' },
    { label: 'Email address', type: 'email' },
    { label: 'Password', type: 'password' },
    { label: 'Repeat password', type: 'password' },
  ],
  sendSubmit: (data) => console.log(data),
}

export const CustomForm_2 = Template.bind({})
CustomForm_2.args = {
  title: 'Contact form',
  inputs: [
    { label: 'User name', type: 'text' },
    { label: 'Email address', type: 'email' },
    { label: 'Password', type: 'password' },
    { label: 'Repeat password', type: 'password' },
    { label: 'Message', type: 'text' },
  ],
  sendSubmit: (data) => console.log(data),
}
