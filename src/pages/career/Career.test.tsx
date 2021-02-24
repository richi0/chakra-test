import React from 'react'
import { render } from '../../test-utils'
import { Career } from './Career'

test('render Carrer', () => {
  const {container} = render(<Career />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
