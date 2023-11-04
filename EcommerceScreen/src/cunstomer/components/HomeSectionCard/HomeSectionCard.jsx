import React from 'react'

export default function HomeSectionCard() {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem]">
            <img className="object-cover object-top w-full h-full" src="https://m.media-amazon.com/images/I/41quQZoeN+L._AC_SR400,600_AGcontrast_.jpg" alt="" />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
            <div className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet.</div>
        </div>
    </div>
  )
}
