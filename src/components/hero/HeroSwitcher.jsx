// components/hero/HeroSwitcher.jsx

const HeroSwitcher = ({ children, className = "" }) => {
  return (
    <aside className={`flex flex-col gap-4 ${className}`}>
      {children}
    </aside>
  )
}

export default HeroSwitcher