import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { CustomButton, CustomButtonProps } from './CustomButton'

export default {
  title: 'Components/Button',
  component: CustomButton,
} as Meta

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  mode: 'primary',
  onClick: () => console.log("aaa"),
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  mode: 'secondary',
  onClick: () => console.log('aaa'),
}

export const Inactive = Template.bind({})
Inactive.args = {
  label: 'Inactive',
  mode: 'inactive',
  onClick: () => console.log('aaa'),
}
