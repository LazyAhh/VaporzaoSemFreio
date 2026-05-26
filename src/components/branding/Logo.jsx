const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 font-black text-white">
        GX
      </div>

      <div>
        <h1 className="text-xl font-black tracking-wide">
          GameX
        </h1>

        <p className="text-xs text-zinc-400">
          Your Gaming Platform
        </p>
      </div>
    </div>
  )
}

export default Logo