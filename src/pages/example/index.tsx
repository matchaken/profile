import LayoutPage from '@/component/LayoutPage'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  return (
    <LayoutPage>
      <h1 className='vh-100 d-flex justify-content-center align-items-center m-0'><span>example</span></h1>
    </LayoutPage>
  )
}
