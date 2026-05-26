

const SecondaryButton = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/10 
        ${className}`}
    >
      {children}
    </button>
  )
}

export default SecondaryButton