type Props = {
  label: string
  color: string
  onClick: () => void
}

export const Button = ({ label, color, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`rounded-md h-10 w-20 font-sans font-medium ${color}`}>
      {label}
    </button>
  )
}
