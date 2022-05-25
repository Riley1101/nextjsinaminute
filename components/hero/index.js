import React from 'react'
export default function Hero({title,description}) {
  return (
      <div className="hero min-[500px] isolate -z-50" >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                  <h1 className="my-5 text-4xl font-bold">{title}</h1>
                  <p className="mb-5">{description}</p>
              </div>
          </div>
      </div>
  )
}
