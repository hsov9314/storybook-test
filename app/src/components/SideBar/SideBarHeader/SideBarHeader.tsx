type SideBarHeaderProps = { label: string }

export const SideBarHeader: React.FC<SideBarHeaderProps> = ({ label }) => {
  return (
    <div className="px-6 py-4 mb-4">
      <p className="text-gray-300 font-bold text-md">{label}</p>
    </div>
  )
}
