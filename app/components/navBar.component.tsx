'use client'
import { FC } from 'react';
import Link from 'next/link'
import TrackableLink from '../components/trackable-link.component'

type NavBarProps = {
    fontSize?: string;
}

const NavBar: FC<NavBarProps> = ({fontSize = ''}: NavBarProps) => {
    return (
        <div className={`${fontSize} flex flex-col w-full lg:w-auto lg:mt-0 lg:flex-row`}>
          <Link href={'/'} className='lg:px-5 font-medium' >Home</Link>
          <Link href='https://www.linkedin.com/in/fiorellavelazcollanos/' target="_blank" className='lg:px-5'>Linkedin Profile</Link>
        </div>
    )
}

export default NavBar;