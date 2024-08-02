import React, { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Function to scroll back to top smoothly
  const scrollToTop = () => {
    // Scroll step value
    const scrollStep = -window.scrollY / (1200 / 15)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }

  // Function to toggle visibility of button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Add scroll event listener to toggle button visibility
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [scrollToTop])

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-14 right-12 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-40 transition duration-300 ease-in-out`}
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-3 text-sm font-medium text-white backdrop-blur-3xl'>
        <IoIosArrowUp size={24} />
      </span>
    </button>
  )
}

export default BackToTopButton
