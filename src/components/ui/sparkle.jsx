import React from 'react'
import SparklesCore from '../lib/sparkles'
import { Pricing } from './pricing'

const Sparkle = () => {
  return (
    <div
      id='harga'
      className='h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'
    >
      <h1 className='md:text-5xl font-pixellate text-2xl lg:text-7xl font-bold text-center text-white relative z-20'>
        Paket Pilihan
      </h1>
      <p className='max-w-2xl text-center flex justify-center text-base md:text-xl mt-8 text-neutral-200'>
        Kami siap mengabadikan momen istimewa Anda dengan keahlian dan
        kreativitas, menghasilkan foto yang penuh makna dan keindahan.
      </p>
      <div className='w-full h-full relative flex justify-center'>
        {/* Gradients */}
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

        {/* Core component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
      </div>

      <Pricing />
    </div>
  )
}
export default Sparkle
