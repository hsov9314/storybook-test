import { Header } from '../Header'
import { SideBar } from '../SideBar'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-row bg-slate-100">
        <SideBar />
        <div className="flex flex-col w-full px-4 pt-6 ml-60">
          <div className="mb-4">
            <Header title="概要" />
          </div>
          <div className="flex flex-col w-full">{children}</div>
        </div>
      </div>
    </>
  )
}
