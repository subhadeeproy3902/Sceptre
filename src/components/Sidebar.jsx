import React from 'react'
import gptLogo from '../assets/logo.webp'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import { useState } from 'react'


const Sidebar = ({ setNewChat }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <button onClick={openSidebar} className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-yellow-600 absolute top-0 left-0 rounded-lg sm:hidden hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside id="default-sidebar" className={`fixed sm:flex-3 top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
        <div className="h-screen px-3 py-4 pt-10 overflow-y-hidden bg-gradient-to-b from-[#012400] to-[#0b450a] border-r border-r-green-900">
          <button onClick={closeSidebar} className={`inline-flex items-center p-2 mt-2 ms-3 text-sm text-yellow-500 absolute top-0 -right-12 rounded-lg sm:hidden hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-gray-200 ${sidebarOpen ? "" : "hidden"}`}>
            <svg fill="currentColor" className='w-6 h-6' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-m</title><path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" /></svg>
          </button>
          <div className='px-4 h-[82.5%]'>
            <div className='flex w-full flex-col justify-center items-center pr-2 gap-3'>
              <img src={gptLogo} alt="" className='rounded-full w-32 h-32 hover:scale-105 duration-200 ease-in-out' style={{ boxShadow: "0 0 50px #23994ab3" }} />
              <span className='brand mt-2 text-[#d6ae2f] font-nova text-4xl font-bold'>Sceptre</span>
            </div>
            <button className='flex text-[#d6d3ae] items-center w-full mt-5 mb-8 py-2 px-4 rounded-md justify-center pr-8 font-semibold text-lg bg-gradient-to-br hover:bg-gradient-to-tl duration-500 ease-in-out from-[#50630d] to-[#0b891e]' onClick={() => { setNewChat(true), setSidebarOpen(false) }}>
              <img src={addBtn} alt="" className='h-5 pr-2' />
              New Chat
            </button>
            <div className='flex w-full flex-col justify-center items-center gap-3'>
              <div className='flex bg-transparent items-center gap-2 rounded text-gray-300 w-full'>
                <p className='text-center'>Sceptre, Loki's wand, descends to Earth to dispel misconceptions about Loki. From Avengers' ambiguity to his heroic end, Loki's legacy shines. Now, he safeguards the Multiverse, and I represent the God of Mischief, answering your questions.</p>
              </div>
            </div>
          </div>
          <div className='px-4 mt-5 py-4 flex flex-col-reverse justify-between gap-5 items-center'>
            <h2 className='text-base opacity-65 hover:opacity-100 text-yellow-200 font-medium'>Made By <a href='https://bento.me/subhadeep3902' rel='noreferrer' className='text-amber-400'>Subhadeep Roy</a></h2>
            <ul className="flex space-x-4 sm:mt-0"><li><a href="https://www.linkedin.com/in/subhadeep3902/" target="_blank" rel="noreferrer" className="text-lime-500/70 hover:text-lime-500"><svg fill="currentColor" className="w-4 h-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xmlSpace="preserve"><g id="XMLID_801_"><path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"></path><path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path><path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"></path></g></svg></a></li><li><a href="https://twitter.com/mvp_Subha" target="_blank" rel="noreferrer" className="text-lime-500/70 hover:text-lime-500"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a></li><li><a href="https://github.com/subhadeeproy3902" target="_blank" rel="noreferrer" className="text-lime-500/70 hover:text-lime-500"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg></a></li><li><a href="https://www.instagram.com/mvp_subha" target="_blank" rel="noreferrer" className="text-lime-500/70 hover:text-lime-500"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z" fill="currentColor"></path></svg></a></li></ul>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar