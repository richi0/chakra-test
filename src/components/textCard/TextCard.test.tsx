import React from 'react'
import { render } from '../../test-utils'
import { TextCard } from './TextCard'

test('renders TextCard', () => {
  const { container } = render(
    <TextCard title="My Title" text="hello" href="https://example.com" />,
  )
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
