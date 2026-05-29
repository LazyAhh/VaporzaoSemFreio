

const SectionContainer = ({
    children,
    title,
    action,
    className = "",
}) => {
    return (
        <section className={`mb-12 w-full ${className}`}>
            {(title || action) && (
                <div className="mb-6 flex items-center justify-between">
                    {title && (
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-1 rounded-full bg-violet-600" />

                            <h2 className="text-3xl font-black uppercase tracking-wide">
                                {title}
                            </h2>
                        </div>
                    )}

                    {action && <div>{action}</div>}
                </div>
            )}

            {children}
        </section>
    )
}

export default SectionContainer