import { IAction } from '@/model/action'
import { ITabMenu } from '@/model/tab'
import { extendTheme } from '@chakra-ui/react'
import Router from 'next/router'

const router = Router

export const chakraTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export const tabMenu: ITabMenu[] = [
  {
    label: 'HOME',
    link: '/'
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nawamongkol/'
  },
]
