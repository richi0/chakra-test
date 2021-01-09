import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CustomInput, CustomInputProps } from './CustomInput'

export default {
  title: 'Components/CustomInput',
  component: CustomInput,
} as Meta

const Template: Story<CustomInputProps> = (args) => <CustomInput {...args} />

export const CustomInput_1 = Template.bind({})
CustomInput_1.args = {
  label: "User name",
  type: "text",
  sendValue: (v) => v,
  help: "Write your user name"
}

export const CustomInput_2 = Template.bind({})
CustomInput_2.args = {
  label: "Password",
  type: "password",
  sendValue: (v) => v,
  help: "Keey your password secure"
}

export const CustomInput_3 = Template.bind({})
CustomInput_3.args = {
  label: "Message",
  type: "text",
  sendValue: (v) => v,
  help: "Write your message here",
  area:true
}