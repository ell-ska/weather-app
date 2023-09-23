'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'

import { type InfoContent, type Card, InfoCard } from './InfoCards'

type InfoSectionProps = {
  cardType: Card
  title: string
  content: InfoContent[]
}

const InfoSection = ({ cardType, title, content }: InfoSectionProps) => {
  if (cardType === 'horizontal-compact') {
    return (
      <div className='flex-1 space-y-6'>
        <h3 className='text-xl'>{title}</h3>
        <div className='grid grid-cols-2 gap-6'>
          {content.map(({ icon, title, value }) => (
            <InfoCard
              key={title}
              icon={icon}
              title={title}
              value={value}
              cardType={cardType}
            />
          ))}
        </div>
      </div>
    )
  } else if (cardType === 'horizontal-wide') {
    return (
      <div className='flex-1 space-y-6'>
        <h3 className='text-xl'>{title}</h3>
        <ScrollArea.Root className='h-32 overflow-hidden'>
          <ScrollArea.Viewport className='h-full w-full'>
            <div className='space-y-4'>
              {content.map(({ icon, title, value }) => (
                <InfoCard
                  key={title}
                  icon={icon}
                  title={title}
                  value={value}
                  cardType={cardType}
                />
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar></ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    )
  } else if (cardType === 'vertical') {
    return (
      <div className='flex-1 space-y-6'>
        <h3 className='text-xl'>{title}</h3>
        <ScrollArea.Root className='max-w-sm overflow-hidden'>
          <ScrollArea.Viewport className='h-full w-full'>
            <div className='flex gap-6'>
              {content.map(({ icon, title, value }) => (
                <InfoCard
                  key={title}
                  icon={icon}
                  title={title}
                  value={value}
                  cardType={cardType}
                />
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation='horizontal'></ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    )
  }
}

export default InfoSection
