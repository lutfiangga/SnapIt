import { HeroParallax } from '../lib/hero-paralax'
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
import produk from '../../assets/images/produk.png'
import produk2 from '../../assets/images/produk-2.png'

const Hero = () => {
  const products = [
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: graduation
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: wedding
    },
    {
      title: 'Pre Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: prewed
    },
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: graduation2
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: wedding2
    },
    {
      title: 'Graduation',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: graduation3
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: wedding3
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: graduation4
    },
    {
      title: 'Wedding',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: wedding4
    },
    {
      title: 'Produk',
      link: 'https://www.instagram.com/onetimescapture/',
      thumbnail: wedding5
    },
  ]

  return (
    <>
      <HeroParallax products={products} />
    </>
  )
}

export default Hero
