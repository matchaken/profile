import { tabMenu } from '@/config/constraint'
import { IAction } from '@/model/action'
import create from 'zustand'

interface ISystemStore {
  tabMenu: IAction[]
  addTabMenu: (tabs: IAction[]) => void
  // isMobile: boolean
}

const useSystemStore = create<ISystemStore>((set) => ({
  tabMenu: tabMenu || [],
  // isMobile: window.matchMedia('(max-width: 500px)'),
  addTabMenu: (tab: IAction[]) => {
    set((state) => ({ tabMenu: [...state.tabMenu, ...tab] }))
  },
}))

export default useSystemStore
