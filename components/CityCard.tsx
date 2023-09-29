import { Cloudy } from 'lucide-react'

const CityCard = () => {
  return (
    <div className='flex items-center justify-between rounded-2xl bg-white px-6 py-4'>
      <div>
        <span className='mb-[2px]'>10:47</span>
        <h3 className='mb-1 font-bold'>London</h3>
        <span>Mostly cloudy</span>
      </div>
      <div className='flex items-center gap-4'>
        <Cloudy size={32} />
        <h4 className='text-5xl font-bold'>14°</h4>
      </div>
    </div>
  )
}

export default CityCard
