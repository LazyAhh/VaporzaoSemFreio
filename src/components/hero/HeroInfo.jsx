// components/hero/HeroInfo.jsx

const HeroInfo = ({
  badge,
  genre,
  title,
  description,
  children,
  className = "",
}) => {
  return (
    <div className={className}>

      {badge && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-violet-600 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}

      {genre && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-violet-400">
          {genre}
        </span>
      )}

      <h1 className="mb-5 text-5xl font-black leading-none text-white">
        {title}
      </h1>

      <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-300">
        {description}
      </p>

      {children}

    </div>
  )
}

export default HeroInfo