

const HeroThumbnailCard = ({
  image,
  title,
  active = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative h-32 overflow-hidden rounded-2xl border transition ${
        active
          ? "border-violet-500"
          : "border-white/10 hover:border-white/30"
      } ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      <div className="absolute bottom-4 left-4">
        <h3 className="text-left text-lg font-bold text-white">
          {title}
        </h3>
      </div>
    </button>
  )
}

export default HeroThumbnailCard