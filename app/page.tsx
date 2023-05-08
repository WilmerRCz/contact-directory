import React from 'react'
import Title from './components/common/Title'
import UserCard from './components/UserCard'

async function fetchUsers () {
  const data = await (await fetch('https://reqres.in/api/users')).json()
  return data.data
}

async function HomePage () {
  const users = await fetchUsers()
  return (
    <>
      <div className='mb-8'>
        <Title title='Contact Directory' />
      </div>
      <UserCard users={users} />
    </>
  )
}

export default HomePage
