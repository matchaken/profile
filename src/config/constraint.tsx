import { IAction } from '@/model/action'
import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export const tabMenu: IAction[] = [
  {
    label: 'HOME',
    action: () => {
      console.log('click homepage')
    },
  },
  {
    label: 'profile page',
    action: () => {
      console.log('click homepage')
    },
  },
]
