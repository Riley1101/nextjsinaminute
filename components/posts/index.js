import React from 'react'
import Card from '@/components/card'
import Loading from '@/components/loading'

export default function Posts({posts}) {
  const {data,isValidating} = posts;
  if(isValidating) return <Loading/>
  return (
      <div className='grid-cols'>
        {
          data && data.posts.map(post=><Card key={post.id} post={post} />)
        }
    </div>
  )

}
