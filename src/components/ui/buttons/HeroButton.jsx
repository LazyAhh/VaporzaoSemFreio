

const HeroButton = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-14 items-center justify-center rounded-xl bg-white px-7 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02] hover:bg-zinc-200 
        ${className}`}
    >
      {children}
    </button>
  )
}

export default HeroButton