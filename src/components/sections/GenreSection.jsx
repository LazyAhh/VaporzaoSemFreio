const GenreSection = ({ title, children, action, className = "" }) => {
  return (
    <section className={`mb-10 ${className}`}>

      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-5 w-1 rounded-full bg-violet-500" />
          <h2 className="text-xl font-black uppercase tracking-widest text-white">
            {title}
          </h2>
        </div>
        {action && action}
      </div>

      {children}

    </section>
  )
}

export default GenreSection