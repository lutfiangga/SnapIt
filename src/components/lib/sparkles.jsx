import React, { useId, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { cn } from '../../utils/cn'
import { motion, useAnimation } from 'framer-motion'

const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity
}) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const controls = useAnimation()

  const particlesLoaded = async container => {
    if (container) {
      console.log(container)
      controls.start({
        opacity: 1,
        transition: {
          duration: 1
        }
      })
    }
  }

  const generatedId = useId()

  return (
    <motion.div animate={controls} className={cn('opacity-0', className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn('h-full w-full')}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || '#0d47a1'
              }
            },
            fullScreen: {
              enable: false,
              zIndex: 1
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onHover: {
                  enable: false,
                  mode: 'repulse'
                },
                resize: true
              },
              modes: {
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1
                },
                vertical: {
                  value: 1
                }
              },
              collisions: {
                enable: false,
                mode: 'bounce'
              },
              color: {
                value: particleColor || '#ffffff'
              },
              move: {
                enable: true,
                speed: speed || 4
              },
              number: {
                density: {
                  enable: true
                },
                value: particleDensity || 120
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1
                },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  startValue: 'random'
                }
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3
                }
              },
              shape: {
                type: 'circle'
              }
            },
            detectRetina: true
          }}
        />
      )}
    </motion.div>
  )
}

export default SparklesCore
