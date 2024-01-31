'use client'
import { FC } from 'react';
import Link from 'next/link'
import { track } from '@vercel/analytics';
import TrackableLink from '../components/trackable-link.component'

type NavBarProps = {
    fontSize?: string;
}

const NavBar: FC<NavBarProps> = ({fontSize = ''}: NavBarProps) => {
    return (
        <div className={`${fontSize} flex flex-col w-full lg:w-auto lg:mt-0 lg:flex-row`}>
          <TrackableLink href={'/'} className='lg:px-5 font-medium' trackvalue='click_home'>Home</TrackableLink>
          <TrackableLink href='https://www.linkedin.com/in/fiorellavelazcollanos/' target="_blank" className='lg:px-5' trackvalue='click_linkedin'>Linkedin Profile</TrackableLink>
        </div>
    )
}

export default NavBar;