import React from 'react'
import twitter from '../../static/images/twitter.svg'
import facebook from '../../static/images/facebook.svg'
import instagram from '../../static/images/instagram.svg'
import youtube from '../../static/images/youtube.svg'
import linkedin from '../../static/images/linkedin.svg'
import { Link, Image } from '@chakra-ui/react'

export interface SocialMediaBadgeProps {
  /**
   * Choose the type of social media
   */
  option: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'linkedin' | string
  /**
   * Link to your social media page
   */
  href: string
}

export const SocialMediaBadge: React.FC<SocialMediaBadgeProps> = ({
  option,
  href,
}) => {
  let img = ''
  if (option === 'twitter') {
    img = twitter
  } else if (option === 'facebook') {
    img = facebook
  } else if (option === 'instagram') {
    img = instagram
  } else if (option === 'youtube') {
    img = youtube
  } else if (option === 'linkedin') {
    img = linkedin
  }
  return (
    <Link href={href}>
      <Image w="50px" src={img} alt={option} />
    </Link>
  )
}
