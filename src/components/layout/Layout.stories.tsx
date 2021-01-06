import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Layout, LayoutProps } from './Layout'

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const Layout_1 = Template.bind({})
Layout_1.args = {
  activeLink: "About"
}

export const Layout_2 = Template.bind({})
Layout_2.args = {
  activeLink: "Projects"
}