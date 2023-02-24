import { IconProps } from './types.local'

export const NotificationIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fillColor = 'none',
  borderColor = 'none'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.55 2.3999H6.75002C4.7618 2.3999 3.15002 4.01168 3.15002 5.9999V18C3.15002 19.9882 4.7618 21.6 6.75002 21.6H18.75C20.7382 21.6 22.35 19.9882 22.35 18V12.5999M22.35 5.3999C22.35 7.05676 21.0069 8.3999 19.35 8.3999C17.6932 8.3999 16.35 7.05676 16.35 5.3999C16.35 3.74305 17.6932 2.3999 19.35 2.3999C21.0069 2.3999 22.35 3.74305 22.35 5.3999Z"
        stroke={borderColor}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
