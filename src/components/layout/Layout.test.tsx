import React from 'react'
import { render } from '@testing-library/react'
import { Layout } from './Layout'

test('render Layout', () => {
  const {container} = render(<Layout activeLink="About"/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
