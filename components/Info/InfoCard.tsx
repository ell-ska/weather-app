import { type LucideIcon } from 'lucide-react'

import IconWithBackground from './IconWithBackground'

type InfoContent = {
  icon: LucideIcon
  title: string
  value: string
}

type Card = 'horizontal-compact' | 'horizontal-wide' | 'vertical'

type InfoCardProps = InfoContent & { cardType: Card }

const InfoCard = ({ icon, title, value, cardType }: InfoCardProps) => {
  if (cardType === 'horizontal-compact') {
    return (
      <div className='flex gap-4'>
        <IconWithBackground icon={icon} />
        <div className='flex flex-col gap-[2px]'>
          <span className='whitespace-nowrap text-sm text-slate-500'>
            {title}
          </span>
          <span className='font-semibold'>{value}</span>
        </div>
      </div>
    )
  } else if (cardType === 'horizontal-wide') {
    return (
      <div className='grid grid-cols-3 items-center'>
        <span className='whitespace-nowrap text-slate-500'>{title}</span>
        <IconWithBackground icon={icon} className='justify-self-center' />
        <span className='justify-self-end font-semibold'>{value}</span>
      </div>
    )
  } else if (cardType === 'vertical') {
    return (
      <div className='flex flex-col items-center'>
        <span className='mb-1 whitespace-nowrap text-slate-500'>{title}</span>
        <IconWithBackground icon={icon} />
        <span className='mt-2 font-semibold'>{value}</span>
      </div>
    )
  }
}

export { type InfoContent, type Card, InfoCard }
