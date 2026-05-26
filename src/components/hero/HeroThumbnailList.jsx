

const HeroThumbnailList = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default HeroThumbnailList