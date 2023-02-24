import { SideBarItems } from './constants.local'
import { SideBarHeader } from './SideBarHeader'
import { SideBarItem } from './SideBarItem'

export const SideBar = () => {
  return (
    <div className="w-60 py-4 bg-slate-700 fixed top-0 left-0 h-full">
      <SideBarHeader label="ダッシュボード" />
      {SideBarItems.map((item) => (
        <SideBarItem label={item.label} icon={item.icon} />
      ))}
    </div>
  )
}
