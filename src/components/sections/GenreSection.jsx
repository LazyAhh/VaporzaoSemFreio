

const GenreSection = ({
  title,
  children,
  action,
  className = "",
}) => {
  return (
    <section className={`mb-14 ${className}`}>

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-3xl font-black tracking-wide text-white">
          {title}
        </h2>

        {action && action}

      </div>

      {children}

    </section>
  )
}

export default GenreSection