import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Card({post}) {
  return (
      <div className="border shadow-sm card bg-base-100">
            <figure className='relative w-full h-[200px]'>
              <Image src={post.coverImage.url} loader={() => post.coverImage.url } alt="Shoes" layout='fill'/>
            </figure>
          <div className="card-body">
              <h2 className="card-title">
                  {post.title}
                  <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                  {post.excerpt}
              </p>
              <div className="justify-end card-actions">
                  <Link href={`/post/${post.id}`}>
                      <div className="btn btn-sm">Checkout</div>

                  </Link>
              </div>
          </div>
      </div>
  )
}
