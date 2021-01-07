import React from 'react'
import { render } from '../../test-utils'
import { Footer } from './Footer'

const social = [
  {
    option: 'facebook',
    href: 'https://facebook.com',
  },
  {
    option: 'twitter',
    href: 'https://twitter.com',
  },
  {
    option: 'instagram',
    href: 'https://instagram.com',
  },
  {
    option: 'linkedin',
    href: 'https://linkedin.com',
  },
  {
    option: 'youtube',
    href: 'https://youtube.com',
  },
]

test('render Footer', () => {
  const { container } = render(
    <Footer
      links={[{ href: '/', text: 'HOME' }]}
      social={social}
      phone="+41 24 472 65 41"
      email="contact@random-engineering.com"
      address={["Address Line 1", "Address Line 2", "Address Line 3"]}
    />,
  )
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
