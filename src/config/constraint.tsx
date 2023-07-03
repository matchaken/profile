import { ITabMenu } from '@/model/tab'
import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  config: {
    initialColorMode: 'light',
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
