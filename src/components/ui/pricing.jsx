import React, { useState } from 'react'
import { BentoGrid, BentoGridItem } from '../lib/bento-grid'
import HoverBorderGradient from '../lib/hover-border-gradient'

import graduation from '../../assets/images/graduation.png'
import graduation2 from '../../assets/images/wisuda.png'
import graduation3 from '../../assets/images/wisuda-2.png'
import graduation4 from '../../assets/images/wisuda-3.png'
import prewed from '../../assets/images/prewed.png'
import wedding from '../../assets/images/wedding.png'
import wedding2 from '../../assets/images/wedding-2.png'
import wedding3 from '../../assets/images/wedding-4.png'
import wedding4 from '../../assets/images/wedding-6.png'
import wedding5 from '../../assets/images/wedding-7.png'
import wedding6 from '../../assets/images/wedding-8.png'
import produk from '../../assets/images/produk.png'
import produk2 from '../../assets/images/produk-2.png'


export const Pricing = () => {
  const [activeTab, setActiveTab] = useState('fotografi')

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  return (
    <>
      <div className='flex justify-center mb-4 md:mb-8 lg:mb-12'>
        <HoverBorderGradient
          containerClassName='rounded-l-full'
          as='button'
          className='bg-black text-white flex items-center space-x-2'
        >
          <button
            className={`text-sm md:text-base font-medium relative inline-flex h-12 overflow-hidden rounded-l-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out ${
              activeTab === 'fotografi' ? '' : 'text-white'
            }`}
            onClick={() => handleTabChange('fotografi')}
          >
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-l-full bg-slate-950 px-6 py-2 md:px-8 md:py-4 lg:px-12 lg:py-4 text-sm font-medium text-white backdrop-blur-3xl'>
              Fotografi
            </span>
          </button>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName='rounded-r-full'
          as='button'
          className='bg-black text-white flex items-center space-x-2'
        >
          <button
            className={`text-sm md:text-base font-medium relative inline-flex h-12 overflow-hidden rounded-r-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out ${
              activeTab === 'videografi' ? '' : 'text-white'
            }`}
            onClick={() => handleTabChange('videografi')}
          >
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-r-full bg-slate-950 px-6 py-2 md:px-8 md:py-4 lg:px-12 lg:py-4 text-sm font-medium text-white backdrop-blur-3xl'>
              Videografi
            </span>
          </button>
        </HoverBorderGradient>
      </div>
      {activeTab === 'fotografi' && (
        <BentoGrid className='w-5/6 md:w-2/3 mx-auto'>
          {pricingData.fotografi.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={getDescription(item)}
              header={
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full min-h-[6rem] object-cover rounded-md'
                />
              }
              className={i === 3 || i === 6 ? 'md:col-span-1' : ''}
            />
          ))}
        </BentoGrid>
      )}
      {activeTab === 'videografi' && (
        <BentoGrid className='w-5/6 md:w-2/3 mx-auto'>
          {pricingData.videografi.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={getDescription(item)}
              header={
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full min-h-[6rem] object-cover rounded-md'
                />
              }
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      )}
    </>
  )
}

function getDescription (item) {
  const features = item.features.map((feature, index) => (
    <li key={index}>{feature}</li>
  ))
  return (
    <>
      <div className='font-sans font-normal flex justify-between text-neutral-600 text-xs dark:text-neutral-300'>
        <ul className='justify-start'>{features}</ul>
        <div className='flex flex-col'>
          <p className='text-sm flex justify-end line-through'>{item.price}</p>
          <p className='font-bold text-lg flex justify-end'>{item.discount}</p>
        </div>
      </div>
    </>
  )
}

const Skeleton = ({ image, title }) => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <img src={image} alt={title} />
  </div>
)

const pricingData = {
  fotografi: [
    {
      title: 'Paket Wisuda',
      price: 'Rp 500.000',
      discount: 'Rp 300.000',
      header: <Skeleton />,
      paket: '',
      features: [
        'All file GD',
        '30 Foto Edit',
        'Unlimited Photoshoot max 3 jam'
      ],
      image: graduation
    },
    {
      title: 'Paket Engagement',
      price: 'Rp 500.000',
      discount: 'Rp 300.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        '30 Foto Edit',
        'Unlimited Photoshoot max 3 jam'
      ],
      image: wedding
    },
    {
      title: 'Paket Prewedding',
      price: 'Rp 600.000',
      discount: 'Rp 300.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        '30 Foto Edit',
        'Unlimited Photoshoot max 3 jam',
        '1 location exclude tiket wisata',
        'Tambah jam: 50K',
        'tambah Lokasi: 100K'
      ],
      image: prewed
    },
    {
      title: 'Paket Akad',
      price: 'Rp 700.000',
      discount: 'Rp 400.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        '50 Foto Edit',
        'Unlimited Photoshoot max 3 jam'
      ],
      image: wedding2
    },
    {
      title: 'Paket Resepsi',
      price: 'Rp 700.000',
      discount: 'Rp 400.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        '50 Foto Edit',
        'Unlimited Photoshoot max 3 jam'
      ],
      image: wedding5
    },
    {
      title: 'Paket Ultimate Wedding',
      price: 'Rp 1.100.000',
      discount: 'Rp 700.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        '100 Foto Edit',
        'Unlimited Photoshoot',
        'Cetak 2 foto ukuran 12R dan figura'
      ],
      image: wedding4
    }
  ],
  videografi: [
    {
      title: 'Paket Engagement',
      price: 'Rp 600.000',
      discount: 'Rp 350.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        'Video 3-5 Menit',
        'Kulialitas 1080p',
        '3 jam take video'
      ],
      image: wedding
    },
    {
      title: 'Paket Prewedding',
      price: 'Rp 600.000',
      discount: 'Rp 350.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        'Video 3-5 Menit',
        'Kulialitas 1080p',
        '3 jam take video'
      ],
      image: prewed
    },
    {
      title: 'Paket Akad',
      price: 'Rp 650.000',
      discount: 'Rp 350.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        'Video 3-5 Menit',
        'Kulialitas 1080p',
        '3 jam take video'
      ],
      image: wedding2
    },
    {
      title: 'Paket Resepsi',
      price: 'Rp 700.000',
      discount: 'Rp 350.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        'Video 3-5 Menit',
        'Kulialitas 1080p',
        '3 jam take video'
      ],
      image: wedding6
    },
    {
      title: 'Paket Ultimate Wedding',
      price: 'Rp 1.000.000',
      discount: 'Rp 600.000',
      header: <Skeleton />,
      features: [
        'All file GD',
        'Video 3-5 Menit',
        'video teaser 1 menit',
        'Kulialitas 1080p'
      ],
      image: wedding4
    }
  ]
}
