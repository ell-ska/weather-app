'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'

import { type InfoContent, type Card, InfoCard } from './InfoCard'

type InfoSectionProps = {
  cardType: Card
  title: string
  content: InfoContent[]
}

const InfoSection = ({ cardType, title, content }: InfoSectionProps) => {
  const contentMap = (): JSX.Element[] => {
    return content?.map(({ icon, title, value }) => (
      <InfoCard
        key={title}
        icon={icon}
        title={title}
        value={value}
        cardType={cardType}
      />
    ))
  }

  return (
    <div className='mx-6 snap-center space-y-6 sm:mx-20 lg:mx-0'>
      <h3 className='text-xl'>{title}</h3>
      {cardType === 'horizontal-compact' ? (
        <div className='grid grid-cols-2 gap-6'>{contentMap()}</div>
      ) : cardType === 'horizontal-wide' ? (
        <ScrollArea.Root className='h-32 overflow-hidden'>
          <ScrollArea.Viewport className='h-full w-full'>
            <div className='space-y-4'>{contentMap()}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar></ScrollArea.Scrollbar>
        </ScrollArea.Root>
      ) : (
        <ScrollArea.Root className='overflow-hidden'>
          <ScrollArea.Viewport className='h-full w-full'>
            <div className='flex gap-6'>{contentMap()}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation='horizontal'></ScrollArea.Scrollbar>
        </ScrollArea.Root>
      )}
    </div>
  )
}

export default InfoSection
