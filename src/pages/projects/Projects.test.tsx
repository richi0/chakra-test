import React from 'react'
import { render } from '../../test-utils'
import { Projects } from './Projects'

test('render Projects', () => {
  const {container} = render(<Projects />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
