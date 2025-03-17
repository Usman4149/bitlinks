import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
      <nav className=' bg-blue-300 px-5 py-3 my-9 mx-10 rounded-full'>
        <div className='h-2 logo font-bold text-2xl text-white hover:font-light'>
        <Link  href ="/">BitLinks</Link>
        </div>

        <ul className='flex gap-4 justify-end '>
            <Link href ="/"><li className='hover:font-bold hover:text-white'>Home</li></Link>
            <Link href ="/About"><li className='hover:font-bold hover:text-white'>About</li></Link>
            <Link href ="/Contact"><li className='hover:font-bold hover:text-white'>Contact</li></Link>
            <Link href ="/shorten"><li className='hover:font-bold hover:text-white'>Shorten</li></Link>
          <li className='flex gap-4 hover:font-bold'>
            <Link href="/shorten"><button className='bg-white rounded-lg  px-2 cursor-pointer '>Try Now</button></Link>
            <Link href="/github"><button className='bg-white rounded-lg  px-2  cursor-pointer  '>Git hub</button></Link>
          </li>
        </ul>
      </nav>
    
  )
}

export default Navbar
