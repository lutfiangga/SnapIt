import React from 'react'
import { motion } from 'framer-motion'
import LampContainer from '../lib/lamp-container'

export const Lamp = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut'
        }}
        className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
      >
          <p className='font-extrabold text-3xl md:text-4xl lg:text-6xl font-pixellate text-white/80 mb-0 md:mb-4 lg:mb-8'>
          ABADIKAN MOMENMU <br /> SETIAP SAAT
        </p>
      </motion.h1>
    </LampContainer>
  )
}
