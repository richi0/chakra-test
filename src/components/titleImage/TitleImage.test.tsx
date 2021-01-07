import React from 'react'
import { render } from '../../test-utils'
import { TitleImage } from './TitleImage'

test('render TitleImage', () => {
  const { container } = render(
    <TitleImage img="aaa" title="Title" text="text" />,
  )
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
