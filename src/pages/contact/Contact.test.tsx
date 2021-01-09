import React from 'react'
import { render } from '../../test-utils'
import { Contact } from './Contact'

test('render Contact', () => {
  const { container } = render(<Contact />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
