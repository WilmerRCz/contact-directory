/* eslint-disable @next/next/no-img-element */
'use client'
import { Users } from '@/app/@types/Users'
import { useRouter } from 'next/navigation'
import Title from '@/app/components/common/Title'

async function getUser (id: string) {
  const data = await (await fetch(`https://reqres.in/api/users/${id}`)).json()
  return data.data
}

async function UsersPage (params: {params: { id: string }}) {
  const router = useRouter()
  const user: Users = await getUser(params.params.id)
  return (
    <div>
      <div className='flex justify-between items-center mb-8'>
        <Title title='Contact Detail' />
        <button
          className='border border-black py-1 px-2 rounded-lg shadow-2xl hover:bg-zinc-100'
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
      <div className='flex justify-center'>
        <div className='max-w-1/5 bg-white shadow-2xl rounded-xl border space-y-2 p-8 text-center cursor-pointer'>
          <div className='flex justify-center items-center'>
            <div className='w-20 h-20 overflow-hidden rounded-full'>
              <img
                className='h-full w-full object-cover'
                src={user.avatar}
                alt='imagen de contacto'
              />
            </div>
          </div>
          <h5 className='text-2xl'>{`${user.first_name} ${user.last_name}`}</h5>
          <span className='text-sm opacity-80'>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default UsersPage
