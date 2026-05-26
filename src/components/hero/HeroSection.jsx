

const HeroSection = ({ children, className = "" }) => {
  return (
    <section className={`grid grid-cols-1 gap-5 lg:grid-cols-[1fr_420px] ${className}`}>
      {children}
    </section>
  )
}

export default HeroSection