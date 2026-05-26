

const VideoButton = ({
  children = "Assistir Trailer",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-black/30 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10 
        ${className}`}
    >
      ▶
      {children}
    </button>
  )
}

export default VideoButton