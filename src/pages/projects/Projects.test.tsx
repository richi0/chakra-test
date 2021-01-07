import React from 'react'
import { render } from '@testing-library/react'
import { Projects } from './Projects'

test('render Projects', () => {
  const {container} = render(<Projects prop1="prop1"/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
