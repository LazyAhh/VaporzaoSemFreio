

const EmptyState = ({
  title = "Nada encontrado",
  description = "Não existem itens disponíveis no momento.",
  className = "",
}) => {
  return (
    <div
      className={`flex min-h-[300px] flex-col items-center justify-center text-center ${className}`}
    >

      <h3 className="text-2xl font-black text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
        {description}
      </p>

    </div>
  )
}

export default EmptyState