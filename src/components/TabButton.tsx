import { ComponentProps } from 'react'

interface TabButtonProps extends ComponentProps<'button'> {
  icon: React.ElementType
  label: string
  isSelected?: boolean
}

export function TabButton({ icon: Icon, label, isSelected = false, className, ...props }: TabButtonProps) {
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      className={`rounded-lg px-4 py-3 text-sm font-medium hover:text-neutral-500 text-neutral-200 aria-selected:bg-cyan-700/20 aria-selected:text-cyan-500 aria-selected:font-c flex items-center gap-2 transition-colors ease-out duration-100 active:scale-95 transform whitespace-nowrap flex-shrink-0 cursor-pointer ${className || ''}`}
      {...props}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  )
} 