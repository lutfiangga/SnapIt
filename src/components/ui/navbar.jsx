import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'
import { StickyNav } from '../lib/navbar'

const Navbar = () => {
  const navItems = [
    {
      name: 'Home',
      link: '#home',
      icon: <IconHome className='h-4 w-4 text-white' />
    },
    {
      name: 'About',
      link: '#about',
      icon: <IconUser className='h-4 w-4 text-white' />
    },
    {
      name: 'Harga',
      link: '#harga',
      icon: <IconMessage className='h-4 w-4 text-white' />
    }
  ]

  return (
    <>
      <StickyNav navItems={navItems} />
    </>
  )
}

export default Navbar
