import React, { useEffect, useRef } from 'react'
import { cn } from '../../utils/cn'
import createGlobe from 'cobe'
import { motion } from 'framer-motion'
import { IconBrandYoutubeFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export function FeatureSection () {
  const features = [
    {
      title: 'Pengalaman Tak Terlupakan',
      description:
        '  Setiap sesi foto dirancang untuk memberikan pengalaman yang tak terlupakan, mengabadikan momen berharga dalam hidup Anda.',
      skeleton: <SkeletonOne />,
      className:
        'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800'
    },
    {
      title: 'Berbagai Pilihan Paket',
      description:
        'Kami menawarkan berbagai pilihan paket fotografi yang dapat disesuaikan dengan kebutuhan dan anggaran Anda, mulai dari sesi foto singkat hingga paket pernikahan lengkap.',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800'
    },
    {
      title: 'Layanan Pelanggan Terbaik',
      description:
        'Kami berdedikasi untuk memberikan layanan pelanggan terbaik, memastikan pengalaman Anda dengan kami selalu menyenangkan.',
      skeleton: <SkeletonThree />,
      className: 'col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800'
    },
    {
      title: 'Lokasi Fleksibel',
      description:
        'Kami siap untuk melakukan sesi foto di berbagai lokasi pilihan Anda, baik di dalam maupun di luar ruangan, untuk menciptakan latar belakang yang sempurna bagi foto Anda.',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none'
    }
  ]

  return (
    <div className='relative z-20 py-10 lg:py-40 max-w-7xl mx-auto' id='about'>
      <div className='px-8'>
        <h4 className='text-3xl font-pixellate lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white'>
          FITUR UNGGULAN
        </h4>

        <p className='text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300'>
           Kami menawarkan berbagai fitur unggulan untuk memastikan setiap momen Anda diabadikan dengan sempurna.
        </p>
      </div>

      <div className='relative'>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800'>
          {features.map(feature => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn('p-4 sm:p-8 relative overflow-hidden', className)}>
      {children}
    </div>
  )
}

const FeatureTitle = ({ children }) => {
  return (
    <p className='max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug'>
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base text-justify',
        'text-neutral-500 text-center font-normal dark:text-neutral-300',
        'text-justify w-full mx-0 md:text-sm my-2'
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className='relative flex py-8 px-2 gap-10 h-[35rem]'>
      <div className='w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2'>
          <img
            src='https://images.pexels.com/photos/5623752/pexels-photo-5623752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='header'
            width={800}
            height={800}
            className='h-full w-full aspect-square object-cover object-left-top rounded-sm'
          />
        </div>
      </div>

      <div className='absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none' />
      <div className='absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none' />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <Link
      to='https://www.instagram.com/onetimescapture/'
      target='__blank'
      className='relative flex gap-10 h-full group/image'
    >
      <div className='w-full mx-auto bg-transparent dark:bg-transparent group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2 relative'>
          <IconBrandYoutubeFilled className='h-20 w-20 absolute z-10 inset-0 text-black m-auto' />
          <img
            src='https://images.unsplash.com/photo-1536632087471-3cf3f2986328?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='header'
            width={800}
            height={800}
            className='h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200'
          />
        </div>
      </div>
    </Link>
  )
}

export const SkeletonTwo = () => {
  const images = [
    '../../../public/graduation.png',
    '../../../public/wedding.png',
    '../../../public/prewed.png',
    '../../../public/wisuda-3.png',
    '../../../public/wedding-6.png',
    '../../../public/wedding-7.png',
  ]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    }
  }

  return (
    <div className='relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden'>
      <div className='flex flex-row -ml-20'>
        {images.map((image, idx) => (
          <motion.div
            key={'images-first' + idx}
            variants={imageVariants}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'
          >
            <img
              src={image}
              alt='paket'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-row'>
        {images.map((image, idx) => (
          <motion.div
            key={'images-second' + idx}
            variants={imageVariants}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'
          >
            <img
              src={image}
              alt='paket'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
            />
          </motion.div>
        ))}
      </div>

      <div className='absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none' />
      <div className='absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none' />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className='h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10'>
      <Globe className='absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72' />
    </div>
  )
}

export const Globe = ({ className }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: state => {
        state.phi = phi
        phi += 0.01
      }
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
      className={className}
    />
  )
}