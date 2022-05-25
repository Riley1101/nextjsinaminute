import React from 'react'
import Image from 'next/image'
export default function PostHero({title,coverImage,excerpt}) {
  return (
      <div className="w-full min-h-[600] hero bg-base-200 bg-transparent md:my-12">
          <div className="flex-col w-full gap-4 hero-content lg:flex-row-reverse">
              <div className='relative min-h-[300px] basis-[40%] grow'>
                  <Image src={coverImage.url} layout='fill' objectFit={'cover'} loader={() => coverImage.url} className="max-w-sm rounded-lg shadow-2xl" alt={'Lorem'} />
              </div>
              <div className="basis-[60%]">
                  <h1 className="text-5xl font-bold">{title}</h1>
                  <p className="py-6">{excerpt}</p>
                  <button className="btn btn-primary">Share</button>
              </div>
          </div>
      </div>
  )
}
