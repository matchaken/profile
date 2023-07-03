import { tabMenu } from '@/config/constraint'
import { IAction } from '@/model/action'
import { ITabMenu } from '@/model/tab'
import create from 'zustand'

interface ISystemStore {
  tabMenu: ITabMenu[]
  addTabMenu: (tabs: ITabMenu[]) => void
}

const useSystemStore = create<ISystemStore>((set) => ({
  tabMenu: tabMenu || [],
  addTabMenu: (tab: ITabMenu[]) => {
    set((state) => ({ tabMenu: [...state.tabMenu, ...tab] }))
  }
}))

export default useSystemStore
