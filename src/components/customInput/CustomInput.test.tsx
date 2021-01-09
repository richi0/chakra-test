import React from 'react'
import { render } from '../../test-utils'
import { CustomInput } from './CustomInput'

test('render CustomInput', () => {
  const {container} = render(<CustomInput label="username" type="text" sendValue={(v) => v}/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
