import React from 'react'
import { render } from '@testing-library/react'
import { Home } from './Home'

test('render Home', () => {
  const {container} = render(<Home />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
