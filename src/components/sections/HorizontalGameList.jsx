

const HorizontalGameList = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  )
}

export default HorizontalGameList