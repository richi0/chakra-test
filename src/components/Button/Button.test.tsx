import { render } from '@testing-library/react'
import { Button } from './Button'

test('render Button', () => {
  const {container} = render(<Button prop1="prop1"/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
