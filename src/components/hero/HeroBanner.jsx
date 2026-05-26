

const HeroBanner = ({
  image,
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative min-h-[620px] overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 ${className}`}
    >
      <img
        src={image}
        alt="Hero Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/70 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-10">
        {children}
      </div>
    </div>
  )
}

export default HeroBanner