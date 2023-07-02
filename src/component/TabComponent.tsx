import { IAction } from '@/model/action'
import { IBaseProps } from '@/model/base-prop'
import useSystemStore from '@/store/useSystemStore'
import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import { FC, ReactNode, useEffect, useState } from 'react'

const TabComponent: FC<IBaseProps> = ({ cls, children }) => {
  const customStyle = cls || ''

  const [isMobile, setIsMobile] = useState(false)
  const [currentPosition, setCurrentPosition] = useState<number>(0)

  const { tabMenu } = useSystemStore((state) => ({
    tabMenu: state.tabMenu || [],
  }))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    mediaQuery.addEventListener('change', (event) => {
      setIsMobile(event.matches)
    })

    window.addEventListener('scroll', () => {
      const yOffset = window.scrollY || window.pageYOffset
      setCurrentPosition(yOffset)
    })

    return () => {
      window.addEventListener('scroll', () => {})
      mediaQuery.removeEventListener('change', () => {})
    }
  }, [])

  const tabButton = (data: IAction): ReactNode => {
    return (
      <>
        <span className={`mx-4 font-weight-bold`} onClick={data.action}>
          {data.label.toLocaleUpperCase()}
        </span>
      </>
    )
  }

  return (
    <div className={'header'}>
      <div
        className={`${isMobile ? '' : 'tab-component'} d-flex justify-content-center align-items-center px-4 ${customStyle}`}
      >
        {!isMobile && tabMenu.map((item) => tabButton(item)) }
      </div>
      <div
        style={{
          minWidth: '100vw',
          minHeight: '2vh',
          backgroundImage:
            'linear-gradient(to bottom, rgba(5, 5, 5, 0.5), rgba(0,0,0,0))',
          transition: 'opacity 0.2s ease-in-out',
          opacity: currentPosition > 10 ? '1' : '0',
        }}
      />
    </div>
  )
}

export default TabComponent
