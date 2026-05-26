import Logo from "../../branding/Logo"
import FooterLinks from "./FooterLinks"
import FooterBottom from "./FooterBottom"

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#080811]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 md:px-6 lg:px-8">

        {/* Top */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Marca */}
          <div className="max-w-sm">
            <Logo />

            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Plataforma de jogos digitais inspirada na experiência moderna de marketplaces gamers.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            <FooterLinks
              title="Plataforma"
              links={["Loja", "Biblioteca", "Comunidade"]}
            />

            <FooterLinks
              title="Suporte"
              links={["Ajuda", "FAQ", "Contato"]}
            />

            <FooterLinks
              title="Legal"
              links={["Privacidade", "Termos", "Licença"]}
            />
          </div>

        </div>

        <FooterBottom />

      </div>
    </footer>
  )
}

export default Footer