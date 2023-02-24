import { IconProps } from '../../Icons/types.local'

type SideBarItemProps = { label: string; icon: React.FC<IconProps> }

export const SideBarItem: React.FC<SideBarItemProps> = (props) => {
  return (
    <div className="px-6 py-4 hover:bg-slate-600">
      <div className="flex">
        <div className="mr-4">
          <props.icon fillColor="#3d4852" borderColor="#a1a1aa" />
        </div>
        <p className="text-gray-400">{props.label}</p>
      </div>
    </div>
  )
}
