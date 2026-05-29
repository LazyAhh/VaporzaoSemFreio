

const LoginCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-full max-w-md rounded-3xl border border-white/10 bg-[#101018] p-8 shadow-2xl ${className}`}
    >
      {children}
    </div>
  )
}

export default LoginCard