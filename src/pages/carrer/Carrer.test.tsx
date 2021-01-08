import React from 'react'
import { render } from '../../test-utils'
import { Carrer } from './Carrer'

test('render Carrer', () => {
  const {container} = render(<Carrer />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
