import React from 'react'
import { render } from '../../test-utils'
import { CustomInput } from './CustomInput'

test('render CustomInput', () => {
  const tagRef = { current: { scrollHeight: 100, clientHeight: 200 } }
  const { container } = render(
    <CustomInput label="username" type="text" sendRef={() => null} />,
  )
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
