/* eslint-disable @next/next/no-img-element */
'use client'
import { Users } from '@/app/@types/Users'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  users: Users[]
}

function UserCard ({ users }:Props) {
  const router = useRouter()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {users.map((users) => (
        <div
          key={users.id}
          className='col-span-1 bg-white shadow-2xl rounded-xl border p-8 space-y-2 text-center cursor-pointer'
          onClick={() => {
            router.push(`/users/${users.id}`)
          }}
        >
          <div className='flex justify-center items-center'>
            <div className='w-20 h-20 overflow-hidden rounded-full'>
              <img
                className='h-full w-full object-cover'
                src={users.avatar}
                alt='imagen de contacto'
              />
            </div>
          </div>
          <h5 className='text-2xl'>{`${users.first_name} ${users.last_name}`}</h5>
          <span className='text-sm opacity-80'>{users.email}</span>
        </div>
      ))}
    </div>
  )
}

export default UserCard
