

const PageContainer = ({ children, className = "" }) => {
    return (
        <main
            className={`min-h-screen w-full bg-[#050510] px-4 py-6 text-white md:px-6 lg:px-8 ${className}`}
        >
            {children}
        </main>
    )
}

export default PageContainer