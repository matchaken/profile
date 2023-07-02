import { IBaseProps } from '@/model/base-prop'
import Head from 'next/head'
import { FC, useEffect } from 'react'
import TabComponent from './TabComponent'
import { tabMenu } from '@/config/constraint'

const LayoutPage: FC<IBaseProps> = ({ cls, children }) => {
  const customStyle = cls || ''

  return (
    <div className='min-vh-100'>
      <TabComponent/>
      <div className={`min-vh-90 d-flex ${customStyle}`}>
        <div className='container'>{children}</div>
      </div>
    </div>
  )
}

export default LayoutPage
