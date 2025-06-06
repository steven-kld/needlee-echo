export default function Button({ children, onClick, icon = null, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 px-7 pr-8 py-3 w-fit rounded-full text-lg font-semibold transition
        ${disabled
          ? 'bg-gradient-to-r from-[#9ACCF9] to-[#D0B9F9] text-white cursor-not-allowed'
          : 'bg-gradient-to-r from-[#00B2FF] to-[#C084FC] text-white hover:brightness-110'}
        drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]
      `}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </button>
  )
}
