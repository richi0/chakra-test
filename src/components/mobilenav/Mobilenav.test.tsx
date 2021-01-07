import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../../test-utils'
import { Mobilenav } from './Mobilenav'

test('renders button label', () => {
  render(
    <Mobilenav
      show={true}
      links={[
        { href: 'hello', text: 'yes' },
        { href: 'hello', text: 'yes' },
        { href: 'hello', text: 'yes' },
      ]}
      toggleShowMenu={() => console.log('aa')}
    />,
  )
  screen.findByText('hello').then((text) => expect(text).toBeInTheDocument())
})
