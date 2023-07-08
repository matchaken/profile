import { IBaseProps } from '@/model/base-prop'
import { ITabMenu } from '@/model/tab'
import useSystemStore from '@/store/useSystemStore'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect, useState } from 'react'

const TabComponent: FC<IBaseProps> = ({ cls, children }) => {
  const customStyle = cls || ''
  const router = useRouter()
  const [currentPosition, setCurrentPosition] = useState<number>(0)

  const { tabMenu } = useSystemStore((state) => ({
    tabMenu: state.tabMenu || [],
  }))

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const yOffset = window.scrollY || window.pageYOffset
      setCurrentPosition(yOffset)
    })

    return () => {
      window.addEventListener('scroll', () => {})
    }
  }, [])

  const isActiveLink = (link: string): boolean => link === router.pathname

  const tabButton = (data: ITabMenu): ReactNode => {
    return (
      <div className={`${isActiveLink(data.link) ? 'tab-active' : ''} tab `}>
        <a
          href={data.link}
          target={data.link.match('www') ? '_blank' : '_self'}
          className={`mx-3 font-weight-bold`}
        >
          {data.label.toLocaleUpperCase()}
        </a>
      </div>
    )
  }

  return (
    <div className={'header'}>
      <div className={'tab-list'}>
        <div
          className={`tab-component  d-flex justify-content-start align-items-center gap-4 px-4 ${customStyle}`}
        >
          {tabMenu.map((item) => tabButton(item))}
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
    </div>
  )
}

export default TabComponent
