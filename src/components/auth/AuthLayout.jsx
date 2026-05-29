

const AuthLayout = ({
  children,
  className = "",
}) => {
  return (
    <main
      className={`flex min-h-screen items-center justify-center bg-[#080811] px-4 ${className}`}
    >

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#101018] p-8 shadow-2xl">
        {children}
      </div>

    </main>
  )
}

export default AuthLayout