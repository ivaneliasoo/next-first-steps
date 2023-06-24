import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
  { path: '/about', label: 'About' },
]

export const NavBar = async () => {

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 m-2 p-2 rounded'>
      <Link href={'/'}>
        <HomeIcon className='mr-2' />
        <span>Home</span></Link>
      <div className='flex flex-1'></div>
      {
        navItems.map((navItem) => (
          <ActiveLink key={navItem.label} {...navItem} />
        ))
      }
      
    </nav>
  )
}
