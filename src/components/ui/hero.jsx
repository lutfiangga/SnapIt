import { HeroParallax } from '../lib/hero-paralax'

const Hero = () => {
  const products = [
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/graduation.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/wedding.png'
    },
    {
      title: 'Pre Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/prewed.png'
    },
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/wisuda.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/wedding-2.png'
    },
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/wisuda-2.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/wedding-6.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/wisuda-3.png'
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/wedding-7.png'
    },
    {
      title: 'Produk',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: '/src/assets/images/produk-2.png'
    },
  ]

  return (
    <>
      <HeroParallax products={products} />
    </>
  )
}

export default Hero
