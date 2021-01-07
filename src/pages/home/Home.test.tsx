import React from 'react'
import { render } from '../../test-utils'
import { Home } from './Home'

test('render Home', () => {
  const {container} = render(<Home />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
