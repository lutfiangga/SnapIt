import React from 'react'
import Vortex from '../lib/vortex'
import { Link } from 'react-router-dom'
const nohp = import.meta.env.VITE_NO_HP;
export function Contact () {
  return (
    <div className='w-full mx-auto rounded-md  h-[30rem] overflow-hidden'>
      <Vortex
        backgroundColor='black'
        className='flex items-center flex-col justify-center py-4 w-full h-full'
      >
        <h2 className='text-white text-2xl font-pixellate md:text-5xl lg:text-7xl font-bold text-center'>
          Bingung? <br /> Ingin Konsultasi?
        </h2>
        <p className='text-white text-sm md:text-2xl max-w-xl mt-6 text-center'>
          Kami menyediakan layanan konsultasi demi mendapatkan pengalaman
          terbaik untuk anda.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
          <Link to={`https://wa.me/${nohp}?text=Hallo kak, saya melihat info di web, saya ingin menanyakan tentang ...`} target='_blank' className='relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 md:px-12 md:py-4 text-sm md:text-base lg:text-xl font-medium text-white backdrop-blur-3xl'>
              Kontak Kami
            </span>
          </Link>
        </div>
      </Vortex>
    </div>
  )
}
