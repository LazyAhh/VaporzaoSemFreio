

const LoadingState = ({
  text = "Carregando...",
  className = "",
}) => {
  return (
    <div
      className={`flex min-h-[300px] items-center justify-center ${className}`}
    >
      <span className="text-sm font-semibold tracking-wide text-zinc-400">
        {text}
      </span>
    </div>
  )
}

export default LoadingState