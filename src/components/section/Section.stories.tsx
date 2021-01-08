import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Section, SectionProps } from './Section'

export default {
  title: 'Components/Section',
  component: Section,
} as Meta

const Template: Story<SectionProps> = (args) => <Section {...args} />

export const Section_1 = Template.bind({})
Section_1.args = {
  title: "Our core values"
}
