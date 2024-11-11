import { FC } from 'react'
import Logo from '../assets/ppa_logo.png'

export const Header: FC = () => {
  return (
    <header className='flex w-full  h-[100px] px-10 py-2'>
      <img src={Logo} width={100} height={100} alt='punto de pago air logo' />
      <span className='mt-1 self-center text-lg font-semibold text-[#EF4935]'>
        Punto de Pago Air
      </span>
    </header>
  )
}
