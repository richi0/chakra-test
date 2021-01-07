import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Footer, FooterProps } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

const social = [
  {
    option: 'facebook',
    href: 'https://facebook.com',
  },
  {
    option: 'twitter',
    href: 'https://twitter.com',
  },
  {
    option: 'instagram',
    href: 'https://instagram.com',
  },
  {
    option: 'linkedin',
    href: 'https://linkedin.com',
  },
  {
    option: 'youtube',
    href: 'https://youtube.com',
  },
]

export const Footer_1 = Template.bind({})
Footer_1.args = {
  links: [{ href: '/', text: 'HOME' }],
  social : social,
  phone: '+41 24 472 65 41',
  email: 'contact@random-engineering.com',
  address: ['Address Line 1', 'Address Line 2', 'Address Line 3'],
}
