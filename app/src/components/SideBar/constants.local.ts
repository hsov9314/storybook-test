import { HomeIcon, DocumentIcon, SettingsIcon } from '../Icons'
import { SideBarProps } from './types.local'

export const SideBarItems: SideBarProps[] = [
  {
    label: '概要',
    icon: HomeIcon
  },
  {
    label: 'データ',
    icon: DocumentIcon
  },
  {
    label: '設定',
    icon: SettingsIcon
  }
]
