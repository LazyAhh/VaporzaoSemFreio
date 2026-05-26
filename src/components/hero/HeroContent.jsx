

const HeroContent = ({ children, className = "" }) => {
  return (
    <div className={`max-w-2xl ${className}`}>
      {children}
    </div>
  )
}

export default HeroContent