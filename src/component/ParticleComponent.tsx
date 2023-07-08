import { IBaseProps } from '@/model/base-prop'
import React, { useRef, useEffect, FC, useCallback } from 'react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

const ParticleComponent: FC<IBaseProps> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#fff',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: 'rgba(0,100,250,0.8)',
          },
          links: {
            color: 'rgb(100,100,100)',
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 0.2,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            outModes: 'split',
            random: true,
            speed: 0.5,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 100,
            },
            value: 25,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleComponent
