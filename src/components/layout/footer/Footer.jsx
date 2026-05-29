import Logo from "../../branding/Logo"

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6 lg:px-8">

        <Logo />

        <p className="text-xs text-zinc-500">
          © 2026 VaporzãoSemFreio. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}

export default Footer