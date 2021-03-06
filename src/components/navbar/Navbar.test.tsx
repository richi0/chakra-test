import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../../test-utils'
import { Navbar } from './Navbar'
import logo from '../../static/images/logo.svg'

test('renders button label', () => {
  render(
    <Navbar
      logo={logo}
      brand="richie"
      links={[{ href: 'www.test1.com', text: 'test1' }]}
    />,
  )
  screen.findByText('test1').then((link) => expect(link).toBeInTheDocument())
})
