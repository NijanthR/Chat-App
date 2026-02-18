import { FiActivity, FiMic } from 'react-icons/fi'

function ChatInput({
  placeholder,
  showAddButton = false,
  containerClassName = '',
  inputClassName = '',
  buttonClassName = '',
  value = '',
  onChange,
  onSubmit,
}) {
  const buttonClass = buttonClassName || 'text-slate-600'

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()
    onSubmit?.()
  }

  return (
    <div
      className={`flex w-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white px-4 pb-3 pt-4 shadow-sm ${containerClassName}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className={`w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 ${inputClassName}`}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showAddButton ? (
            <button className={`grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-lg ${buttonClass}`}>
              ＋
            </button>
          ) : null}
          <button className={`flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium ${buttonClass}`}>
            <FiActivity className="h-3.5 w-3.5" /> Tools
          </button>
        </div>
        <button className={`grid h-8 w-8 place-items-center rounded-full bg-slate-100 ${buttonClass}`}>
          <FiMic className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
