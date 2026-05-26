// components/hero/HeroActions.jsx

const HeroActions = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default HeroActions