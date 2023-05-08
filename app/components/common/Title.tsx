import React from 'react'

interface Props {
  title: string
}

function Title ({ title }: Props) {
  return (
    <h2 className='self-center items-center text-3xl sm:text-4xl font-semibold'>{title}</h2>
  )
}

export default Title
