type Props = {
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ children }: Props) => {
  return <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
}
