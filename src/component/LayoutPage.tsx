import { BaseProps } from '@/model/base-prop'
import Head from 'next/head'
import { FC } from 'react'

const LayoutPage: FC<BaseProps> = ({ cls, children }) => {
  return (
    <>
      <div className={`min-vh-100 d-flex ${cls}`}>
        <div className='container'>{children}</div>
      </div>
    </>
  )
}

export default LayoutPage
