import React from 'react'
import { render } from '@testing-library/react'
import { CustomButton } from './CustomButton'

test('renders button label', () => {
  const {container} = render(<CustomButton label="richie" onClick={() => null} />)
  const button = container.querySelector('button')
  expect(button).toBeInTheDocument()
})
