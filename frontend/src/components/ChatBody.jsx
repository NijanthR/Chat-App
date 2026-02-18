function ChatBody({ variant = 'desktop', actions = [] }) {
  if (variant === 'mobile') {
    return (
      <div className="flex-1 space-y-4 overflow-y-auto p-3 pb-28 text-sm">
        <div className="rounded-xl border border-teal-200 bg-teal-100 p-3 text-gray-700">
          Based on the Market_Report.pdf, the key growth drivers for Q3 are decentralized infrastructure and AI-driven
          automation.
        </div>
        <div className="rounded-xl border border-gray-400 bg-gray-100 p-3 text-gray-600">
          Can you cross-reference this with the user interview notes? I want to see if the qualitative data matches
          that growth figure.
        </div>

        <div className="flex flex-wrap gap-2">
          {actions.map((action) => (
            <button
              key={action}
              className="rounded-full border border-teal-300 bg-teal-100 px-3 py-1.5 text-xs text-teal-700"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-5 overflow-y-auto px-4 py-6 lg:px-6">
      <ChatBubble align="end">
        Can you summarize the core trends in sustainable packaging from the Market_Report.pdf? Also, what does it say
        about the YoY growth for consumer interest?
      </ChatBubble>

      <ChatBubble align="start">
        <p>
          Based on the <span className="text-teal-700">Market_Report.pdf</span>, the core trends involve transition from
          single-use plastics to biodegradable options.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          <li>Increased adoption of mushroom-based packaging for electronics.</li>
          <li>Regulatory shifts in the EU mandating 30% recycled content by 2026.</li>
          <li>Circular economy partnerships between retailers and waste management firms.</li>
        </ul>
        <div className="mt-4 rounded-lg border border-teal-200 bg-gray-100 p-3 text-sm italic text-gray-600">
          "Consumer interest in sustainable packaging has grown by 15% YoY, particularly among Gen Z and Millennial
          demographics."
        </div>
      </ChatBubble>

      <ChatBubble align="end">
        Thats great. Can you generate a summary for our internal memo and create some flashcards for the sales team
        training?
      </ChatBubble>
    </div>
  )
}

function ChatBubble({ children, align }) {
  return (
    <div className={`flex ${align === 'end' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] lg:max-w-[70%] rounded-2xl border px-4 py-3 text-sm leading-6 ${
          align === 'end'
            ? 'border-teal-300 bg-teal-100 text-gray-800'
            : 'border-gray-400 bg-gray-100 text-gray-700'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default ChatBody
