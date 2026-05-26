

const PrimaryButton = ({
    children,
    onClick,
    className = "",
}) => {
    return (
        <button
            onClick={onClick}
            className={`flex h-12 items-center justify-center rounded-xl bg-violet-600 px-6 text-sm font-bold text-white transition hover:bg-violet-500 
                ${className}`}
        >
            {children}
        </button>
    )
}

export default PrimaryButton