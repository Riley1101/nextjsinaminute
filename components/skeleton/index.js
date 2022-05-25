import React from 'react'

export default function Skeleton() {
  return (
        <div className="flex flex-col w-full rounded-md animate-pulse">
          <div className=" bg-gray-100 basis-[30%] min-h-[150px] rounded-md mb-2">
          </div>
          <div className="flex flex-col space-y-2 grow">
              <div className="h-12 bg-gray-100 rounded-md"></div>
              <div className="h-6 bg-gray-100 rounded-md "> </div>
          </div>
        </div>

  )
}
