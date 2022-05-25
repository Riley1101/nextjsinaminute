import React from 'react'
import Collapse from '@/components/collapse'
export default function Overview({data}) {
  return (
    <div className='grid gap-4 p-4 my-4 md:p-0'>
        {
          data?.courses.map(idm => <Collapse key={idm.id} data={idm}/>)
        }
    </div>
  )
}
