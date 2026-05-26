const IconButton = ({ icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white 
        ${className}`}
    >
      {icon}
    </button>
  )
}

export default IconButton