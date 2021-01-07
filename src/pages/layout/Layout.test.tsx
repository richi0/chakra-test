import React from 'react'
import { render } from '../../test-utils'
import { Layout } from './Layout'

test('render Layout', () => {
  const { container } = render(
    <Layout activeLink="About" titleImage="aa" title="title" text="text" />,
  )
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
