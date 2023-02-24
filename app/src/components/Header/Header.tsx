import { NotificationIcon, UserIcon } from '../Icons'

type Props = {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex w-full">
      <div className="w-3/4">
        <p className="text-2xl font-bold text-black-500">{title}</p>
      </div>
      <div className="w-1/4">
        <div className="flex justify-end">
          <div className="mr-4">
            <NotificationIcon borderColor="#a1a1aa" />
          </div>
          <UserIcon borderColor="#a1a1aa" />
        </div>
      </div>
    </div>
  )
}
