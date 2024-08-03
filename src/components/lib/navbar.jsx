import React from 'react'
import { cn } from '../../utils/cn'
import { Link } from 'react-router-dom'
import { BsCamera2 } from 'react-icons/bs'

const nohp = import.meta.env.VITE_NO_HP

export const StickyNav = ({ navItems, className }) => {
  return (
    <div
      className={cn(
        'flex w-full sticky top-0 border-b border-white/[0.2] bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 lg:px-16 py-4 items-center justify-between space-x-4',
        className
      )}
    >
      <div className='justify-start flex flex-row items-center gap-4 text-white font-bold sm:text-xl md:text-2xl lg:text-3xl'>
        <span className='block'>
          <BsCamera2 />
        </span>
        <p className='mb-1 hidden md:block'>SnapIt</p>
      </div>
      <div className='justify-end'>
        <div className='flex flex-row gap-4'>
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300'
              )}
            >
              <span className='block sm:hidden'>{navItem.icon}</span>
              <span className='hidden sm:block text-sm md:text-base lg:text-lg'>
                {navItem.name}
              </span>
            </a>
          ))}
          <Link
            to={
              `https://wa.me/${nohp}?text=Hallo kak, saya melihat info di web, saya ingin memesan paket...`
            }
            className='border text-xs md:text-base font-medium relative border-neutral-200 border-white/[0.2] text-white px-4 md:px-6 py-2 rounded-full'
          >
            <span>Booking Sekarang</span>
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px' />
          </Link>
        </div>
      </div>
    </div>
  )
}
