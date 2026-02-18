function ChatInput({
  placeholder,
  showAddButton = false,
  containerClassName = '',
  inputClassName = '',
  buttonClassName = '',
}) {
  const buttonClass = buttonClassName || 'text-teal-700'

  return (
    <div
      className={`flex items-center gap-2 rounded-xl border border-teal-200 bg-gray-100 px-3 py-2 ${containerClassName}`}
    >
      {showAddButton ? <button className={`text-lg ${buttonClass}`}>＋</button> : null}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 ${inputClassName}`}
      />
      <button className={buttonClass}>➤</button>
    </div>
  )
}

export default ChatInput
