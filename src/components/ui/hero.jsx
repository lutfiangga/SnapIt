import { HeroParallax } from '../lib/hero-paralax'

const Hero = () => {
  const products = [
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/graduation.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wedding.png'
    },
    {
      title: 'Pre Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/prewed.png'
    },
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wisuda.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wedding-2.png'
    },
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wisuda-2.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wedding-6.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wisuda-3.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wedding-7.png'
    },
    {
      title: 'Produk',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/produk-2.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '../../../public/wedding-4.png'
    }
  ]

  return (
    <>
      <HeroParallax products={products} />
    </>
  )
}

export default Hero
