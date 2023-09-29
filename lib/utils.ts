import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, isToday, isYesterday, isValid } from 'date-fns'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string | number) => {
  const currentDate = new Date(date)
  if (!isValid(currentDate)) return null

  return isToday(currentDate)
    ? `Today, ${format(currentDate, 'HH:mm')}`
    : isYesterday(currentDate)
    ? `Yesterday, ${format(currentDate, 'HH:mm')}`
    : format(currentDate, 'EEE MMM dd, HH:mm')
}
