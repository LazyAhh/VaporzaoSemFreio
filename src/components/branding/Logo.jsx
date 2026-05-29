const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-950">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" fillOpacity="0.4"/>
          <path d="M7.5 9L12 4.5L16.5 9L12 13.5L7.5 9Z" fill="white"/>
        </svg>
      </div>

      <span className="text-base font-black tracking-tight text-white">
        Vaporzão<span className="text-violet-400">SemFreio</span>
      </span>
    </div>
  )
}

export default Logo