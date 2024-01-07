import React, { useEffect, useRef, useState } from 'react'
import sendBtn from "../assets/send.svg"
import userIcon from "../assets/user-icon.webp"
import logo from "../assets/logo.webp"
import Loading from './Loading'
import { sendMsgToOpenAi } from '../openai'


const Chatbox = ({ newChat, setNewChat }) => {

  const msgEnd = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am Sceptor. Many of you know me as Loki ki chhari. I am here to help you with your queries because Loki cant help you with that as he is currently busy holding the whole multiverse.",
      isBot: true,
    }
  ])

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages, newChat])

  const handleSent = async () => {
    if (inputValue.trim() === "") {
      return
    }
    setMessages(prevMessages => [...prevMessages, { text: inputValue, isBot: false }]);
    setLoading(true)
    setNewChat(false)
    setInputValue('')
    if (/your name|name|about|who are u|what are u/i.test(inputValue)) {
      setLoading(false)
      setMessages(prevMessages => [...prevMessages, { text: "I am Scepter. You might know me as Loki's wand. I have been sent by him to Earth by him because he is busy holding the multiverse tree. Let me know if you have any further questions.", isBot: true }]);
    }
    else if (/chat\s*gpt/i.test(inputValue)) {
      setLoading(false);
      setMessages(prevMessages => [...prevMessages, { text: "I don't know about ChatGPT.", isBot: true }]);
    }
    else {
      const res = await sendMsgToOpenAi(inputValue);
      setLoading(false)
      setMessages(prevMessages => [...prevMessages, { text: res.content, isBot: true }]);
    }
  }

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      await handleSent()
    }
  }

  useEffect(() => {
    if (newChat) {
      setMessages([
        {
          text: "Hi, I am Sceptor. Many of you know me as Loki ki chhari. I am here to help you with your queries because Loki cant help you with that as he is currently busy holding the whole multiverse.",
          isBot: true,
        }
      ]);
      setNewChat(false);
    }
  }, [newChat]);


  return (
    <>
      <div className='overflow-y-scroll scroll-smooth w-full max-w-6xl' style={{ height: "calc(100vh - 11rem)", scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {messages.map((message, index) => (
          <div key={index} className={`m-1 mb-4 p-3 flex-col sm:flex-row rounded-md text-white text-sm md:text-base sm:m-4 sm:p-5 flex sm:px-5 items-start gap-4 ${message.isBot ? "bg-gradient-to-b from-lime-600/30 to-green-600/40" : ""}`}>
            <img src={message.isBot ? logo : userIcon} alt="" className='h-8 sm:h-10 object-cover rounded-full border ring-1 ring-offset-0 ring-lime-500 border-lime-300' />
            <p className='leading-6'>{message.text}</p>
          </div>
        ))}
        {loading && <div className='sm:ms-10 ml-2 mt-12'><Loading /></div>}
        <div ref={msgEnd} />
      </div>

      <div className='mt-auto w-full flex flex-col justify-center items-center'>
        <div className='px-2 bg-gradient-to-b from-[#c5ff93c0] to-[#90e71f] flex justify-between items-center rounded-md w-full max-w-4xl'>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            name="inputText"
            id="Togpt"
            className='bg-transparent tracking-wide w-full border-none resize-none outline-none p-3 font-medium text-[#071a03] placeholder:text-[#1f4617]'
            required
            autoComplete='off'
            placeholder={loading ? 'Hold On... till you ask the next question' : 'Send a message...'}
            disabled={loading}
          />
          <button className='ml-1' onClick={handleSent}>
            <img src={sendBtn} alt="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Chatbox