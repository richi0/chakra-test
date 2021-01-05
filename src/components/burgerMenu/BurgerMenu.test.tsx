import { render } from '@testing-library/react'
import React from 'react'
import { BurgerMenu } from './BurgerMenu'

test('renders button label', () => {
  const {container} = render(<BurgerMenu onClick={() => console.log("test")}/>)
  const svg = container.querySelector('svg')
  expect(svg).toBeInTheDocument()
})

