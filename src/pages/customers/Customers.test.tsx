import React from 'react'
import { render } from '../../test-utils'
import { Customers } from './Customers'

test('render Customers', () => {
  const {container} = render(<Customers />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
