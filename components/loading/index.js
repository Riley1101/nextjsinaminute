import React from 'react'
import Skeleton from '@/components/skeleton'
export default function Loading() {
  return (
    <div className='grid-cols'>
        <Skeleton/>
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </div>
  )
}
