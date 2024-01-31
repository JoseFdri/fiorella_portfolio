'use client'
import { ReactNode, FC } from 'react';
import Link, { LinkProps } from 'next/link'
import { track } from '@vercel/analytics';

type Props = LinkProps & {
  trackvalue?: string,
  children: ReactNode;
  className?: string;
  target?: string;
}

const TrackableLink: FC<Props> = (props) => {
    return (
      <Link {...props} onClick={()=> props.trackvalue ? track(props.trackvalue): ''} >{props.children}</Link>
    )
}

export default TrackableLink;