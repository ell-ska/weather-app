import { type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type IconWithBackgroundProps = {
  icon: LucideIcon
  className?: string
}

const IconWithBackground = ({ icon, className }: IconWithBackgroundProps) => {
  const Icon = icon
  return (
    <div className={cn('rounded-full bg-slate-100 p-3', className)}>
      <Icon />
    </div>
  )
}

export default IconWithBackground
