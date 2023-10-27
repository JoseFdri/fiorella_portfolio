import { FC } from 'react';
import Link from 'next/link'

type NavBarProps = {
    fontSize?: string;
}

const NavBar: FC<NavBarProps> = ({fontSize = ''}: NavBarProps) => {
    return (
        <div className={`${fontSize} flex flex-col w-full lg:w-auto lg:mt-0 lg:flex-row`}>
          <span className='lg:px-5 font-medium'>Work</span>
          <span className='lg:px-5'>About</span>
          <span className='lg:pl-5'>Contact</span>
        </div>
    )
}

export default NavBar;