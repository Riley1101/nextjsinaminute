import React from 'react'

export default function Collapse({data}) {
  return (
      <div tabIndex="0" className="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box">
          <div className="text-xl font-medium collapse-title">
            {data.title}
          </div>
          <div className="prose collapse-content">
              <ul>
                  {
                      data.description.map(des => <li key={des}> {des}</li>)
                  }
              </ul>   
          </div>
      </div>

  )
}
