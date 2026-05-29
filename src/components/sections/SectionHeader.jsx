

const SectionHeader = ({
    title,
    subtitle,
    action,
    className = "",
}) => {
    return (
        <div className={`flex items-end justify-between gap-4 ${className}`}>

            <div>

                <h2 className="text-3xl font-black tracking-wide text-white">
                    {title}
                </h2>

                {subtitle && (
                    <p className="mt-2 text-sm text-zinc-400">
                        {subtitle}
                    </p>
                )}

            </div>

            {action && action}

        </div>
    )
}

export default SectionHeader