import React from 'react'
import { render } from '../../test-utils'
import { Section } from './Section'

test('render Section', () => {
  const {container} = render(<Section title="prop1"/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
