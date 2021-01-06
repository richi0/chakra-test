import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { TitleImage, TitleImageProps } from './TitleImage'
import img1 from '../../static/images/p1.jpg'
import img2 from '../../static/images/p5.jpg'

export default {
  title: 'Components/TitleImage',
  component: TitleImage,
} as Meta

const Template: Story<TitleImageProps> = (args) => <TitleImage {...args} />

export const TitleImage_1 = Template.bind({})
TitleImage_1.args = {
  img: img1,
  title: "Title of Image",
  text: "This is my text"
}

export const TitleImage_2 = Template.bind({})
TitleImage_2.args = {
  img: img2,
  title: "Title of Image",
  text: "This is my text This is my text This is my text This is my text This is my text"
}
