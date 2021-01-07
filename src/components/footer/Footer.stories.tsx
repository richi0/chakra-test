import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Footer, FooterProps } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Footer_1 = Template.bind({})
Footer_1.args = {
  links: [{ href: '/', text: 'HOME' }],
}
