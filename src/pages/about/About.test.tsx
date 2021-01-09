import React from 'react'
import { render } from '../../test-utils'
import { About } from './About'

test('render About', () => {
  const {container} = render(<About />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
