import { cn } from '@/lib/utils'

type IconWithBackgroundProps = {
  icon: React.ReactNode
  className?: string
}

const IconWithBackground = ({ icon, className }: IconWithBackgroundProps) => {
  return (
    <div className={cn('rounded-full bg-slate-100 p-3', className)}>{icon}</div>
  )
}

export default IconWithBackground
