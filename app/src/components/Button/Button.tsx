type Props = {
  label: string
  color: string
  onClick: () => void
}

export const Button = ({ label, color = 'bg-blue-500', onClick }: Props) => {
  return (
    <button onClick={onClick} className={`rounded-md h-10 w-20 font-sans font-medium ${color}`}>
      {label}
    </button>
  )
}
