import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4 '>
        <i className="fa-sharp text-slate-800 fa-solid fa-spinner animate-spin text-4xl sm:text-5xl"></i>
    </div>
  )
}
