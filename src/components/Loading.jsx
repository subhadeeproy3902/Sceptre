import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="w-3 h-3 rounded-full bg-green-700 animate-bounce ease-linear [animation-delay:.7s]"></div>
        <div className="w-3 h-3 rounded-full bg-green-700 animate-bounce ease-linear [animation-delay:.3s]"></div>
        <div className="w-3 h-3 rounded-full bg-green-700 animate-bounce ease-linear [animation-delay:.7s]"></div>
      </div>
    </>
  )
}

export default Loading
