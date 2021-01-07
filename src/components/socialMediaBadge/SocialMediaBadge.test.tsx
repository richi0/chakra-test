import React from 'react'
import { render } from '../../test-utils'
import { SocialMediaBadge } from './SocialMediaBadge'

test('render SocialMediaBadge', () => {
  const {container} = render(<SocialMediaBadge option="twitter" href="/"/>)
  const a = container.querySelector('a')
  expect(a).toBeInTheDocument()
})
