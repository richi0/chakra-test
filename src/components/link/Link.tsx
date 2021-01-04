import React from 'react'

export interface LinkProps {
  /**
   * Text of the link
   */
  text: string
  /**
   * Href of the link
   */
  href: string
  /**
   * Link is active / You are on the page the link links to.
   */
  active?: boolean
}

export const Link: React.FC<LinkProps> = ({ href, text, active = false }) => {
  return (
    <a
      href={href}
      className={`text-xl text- hover:text- hover:underline duration-250 visited:text-purple-600 active:text-black`}
    >
      {text.toUpperCase()}
    </a>
  )
}
