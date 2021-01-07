import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './Footer'

test('render Footer', () => {
  const { container } = render(<Footer links={[{ href: '/', text: 'HOME' }]} />)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
