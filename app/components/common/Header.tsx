import Link from 'next/link'
import React from 'react'

function Header () {
  return (
    <header className='h-16 mb-4 sm:mb-0 flex justify-end items-center'>
      <nav>
        <ul className='flex items-center text-center text-base space-x-4'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
