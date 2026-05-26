const NavItem = ({ label, active = false }) => {
  return (
    <button
      className={`text-sm font-semibold transition hover:text-violet-400 ${
        active ? "text-white" : "text-zinc-400"
      }`}
    >
      {label}
    </button>
  )
}

export default NavItem