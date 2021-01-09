import React from 'react'
import { render } from '../../test-utils'
import { CustomForm } from './CustomForm'

test('render CustomForm', () => {
  const { container } = render(
    <CustomForm
      title="Contact form"
      inputs={[{ label: 'User name', type: 'text' }]}
      sendSubmit={(data) => console.log(data)}
    />,
  )
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
