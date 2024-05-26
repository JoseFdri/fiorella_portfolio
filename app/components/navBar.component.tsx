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
            <div className='lg:px-5 font-medium'>
                <Link href={'/'}  >Home</Link>
            </div>
            <div className='lg:px-5'>
                <Link href='https://www.linkedin.com/in/fiorellavelazcollanos/' target="_blank">Linkedin Profile</Link>
            </div>
        </div>
    )
}

export default NavBar;