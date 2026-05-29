

const ErrorState = ({
  title = "Ocorreu um erro",
  description = "Não foi possível carregar os dados.",
  className = "",
}) => {
  return (
    <div
      className={`flex min-h-[300px] flex-col items-center justify-center text-center ${className}`}
    >

      <h3 className="text-2xl font-black text-red-400">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
        {description}
      </p>

    </div>
  )
}

export default ErrorState