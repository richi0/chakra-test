import { render } from '@testing-library/react'
import { Footer } from './Footer'

test('render Footer', () => {
  const {container} = render(<Footer prop1="prop1"/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
