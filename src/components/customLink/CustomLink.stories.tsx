import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CustomLink, CustomLinkProps } from './CustomLink'

export default {
  title: 'Components/Link',
  component: CustomLink,
} as Meta

const Template: Story<CustomLinkProps> = (args) => <CustomLink {...args} />

export const Link_1 = Template.bind({})
Link_1.args = {
  href: '/',
  text: 'This is a link',
}

export const ActiveLink = Template.bind({})
ActiveLink.args = {
  href: '/',
  text: 'This link is active',
  active: true,
}
