const HeroSection = ({ children, className = "" }) => {
    return (
        <section className={`grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px] ${className}`}>
            {children}
        </section>
    )
}

export default HeroSection