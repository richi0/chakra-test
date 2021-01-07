import React from 'react'
import { render } from '../../test-utils'
import { CustomLink } from './CustomLink'

test('renders button label', () => {
  const { container } = render(
    <CustomLink href="www.test1.ch" text="test1" />,
  )
  const a = container.querySelector('a')
  expect(a).toBeInTheDocument()
})
