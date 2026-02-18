import { useEffect, useRef, useState } from 'react'
import { FiCopy, FiRefreshCw, FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { RiSparklingFill } from 'react-icons/ri'

import ChatBody from '../components/ChatBody.jsx'
import ChatInput from '../components/ChatInput.jsx'

function DashboardPage({ size }) {
  const isMobile = size === 'mobile'
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isAtLatest, setIsAtLatest] = useState(true)
  const listRef = useRef(null)
  const latestRef = useRef(null)

  // Group messages into [userMsg, assistantMsg] pairs
  const pairs = []
  for (let i = 0; i < messages.length; i += 2) {
    pairs.push(messages.slice(i, i + 2))
  }

  // Scroll latest pair into view on new message
  useEffect(() => {
    if (!latestRef.current) return
    latestRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pairs.length])

  const handleScroll = () => {
    const el = listRef.current
    if (!el) return
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
    setIsAtLatest(distanceFromBottom <= 48)
  }

  const scrollToLatest = () => {
    latestRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = () => {
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return
    const timestamp = Date.now()
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: `${timestamp}-user`, role: 'user', text: trimmedValue },
      { id: `${timestamp}-assistant`, role: 'assistant', text: 'Thanks! I can help with that. What should we tackle first?' },
    ])
    setInputValue('')
  }

  return (
    <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden bg-linear-to-b from-white via-teal-50 to-teal-100">
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="min-h-0 flex-1 overflow-y-auto"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-center px-4">
            <ChatBody variant="landing" size={size} />
          </div>
        ) : (
          // Oldest pair first — each takes full screen height — scroll UP to see previous
          pairs.map((pair, index) => {
            const isLatest = index === pairs.length - 1
            return (
              <div
                key={pair[0].id}
                ref={isLatest ? latestRef : null}
                className="flex flex-col px-4 py-6 overflow-y-auto"
                style={{ scrollSnapAlign: 'start', height: listRef.current?.clientHeight ?? '100svh' }}
              >
                <div className="mx-auto w-full max-w-2xl space-y-8">
                  {pair.map((message) => (
                    <div key={message.id}>
                      {message.role === 'user' ? (
                        <div className="flex justify-end">
                          <div className="max-w-[72%] rounded-2xl bg-slate-100 px-5 py-3 text-sm leading-6 text-slate-800">
                            {message.text}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0 text-teal-500">
                            <RiSparklingFill className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm leading-7 text-slate-800">{message.text}</p>
                            <div className="mt-3 flex items-center gap-3 text-slate-400">
                              <button className="rounded p-1 hover:bg-slate-100 hover:text-slate-600"><FiThumbsUp className="h-4 w-4" /></button>
                              <button className="rounded p-1 hover:bg-slate-100 hover:text-slate-600"><FiThumbsDown className="h-4 w-4" /></button>
                              <button className="rounded p-1 hover:bg-slate-100 hover:text-slate-600"><FiRefreshCw className="h-4 w-4" /></button>
                              <button className="rounded p-1 hover:bg-slate-100 hover:text-slate-600"><FiCopy className="h-4 w-4" /></button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })
        )}
      </div>

      {messages.length > 0 && !isAtLatest ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-20 flex justify-center">
          <button
            type="button"
            onClick={scrollToLatest}
            className="pointer-events-auto rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
          >
            ↓ Latest
          </button>
        </div>
      ) : null}

      <div className="shrink-0 border-t border-slate-200/60 bg-white/70 px-6 pb-4 pt-3 backdrop-blur">
        <div className="mx-auto w-full max-w-2xl">
          <ChatInput
            placeholder="Ask anything"
            showAddButton={!isMobile}
            containerClassName="border-slate-200 bg-white/90 shadow-md"
            inputClassName="text-base text-slate-900 placeholder:text-slate-400"
            buttonClassName="text-slate-600"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
