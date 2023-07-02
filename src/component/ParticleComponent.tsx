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
            value: '#1c1c1c',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 0.05,
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
            value: { min: 0.5, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleComponent
