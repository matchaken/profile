import LayoutPage from '@/component/LayoutPage'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <LayoutPage>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.2 }}
          className='d-flex justify-content-center align-items-center m-0'
        >
          ON DEVELOPMENT
        </motion.h1>
      </div>
    </LayoutPage>
  )
}
