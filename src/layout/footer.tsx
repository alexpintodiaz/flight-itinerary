import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className='flex justify-end w-full h-[80px] px-10 py-4'>
      <span className='italic text-[#EF4935] max-sm:text-xs max-md:text-sm'>
        Prueba técnica desarrollada por{' '}
        <a
          href='https://github.com/alexpintodiaz/flight-itinerary'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'>
          Alexander Pinto
        </a>
      </span>
    </footer>
  )
}
