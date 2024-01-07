import React from 'react'
import Sidebar from './components/Sidebar'
import Chatbox from './components/Chatbox'
import { useState } from 'react'


const App = () => {
  const [newChat, setNewChat] = useState(false)

  return (
    <>
      <div className='bg-gradient-to-bl min-h-screen from-[#071a03] to-[#114805] flex'>
        <Sidebar setNewChat={setNewChat} />
        <div className="sm:ml-64 w-full">
        <div className='flex flex-col mx-2 items-center h-full pt-16 pb-2 sm:pb-8 justify-center'>
          <Chatbox newChat={newChat} setNewChat={setNewChat} />
        </div>
        </div>
      </div>
    </>

  )
}

export default App