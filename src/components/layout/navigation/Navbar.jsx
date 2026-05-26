import Logo from "../../branding/Logo"
import IconButton from "../../ui/buttons/IconButton"
import Navigation from "./Navigation"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B17]/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">

                {/* Logo */}
                <Logo />

                {/* Navegação */}
                <Navigation />

                {/* Ações */}
                <div className="flex items-center gap-3">
                    <IconButton icon="🔍" />
                    <IconButton icon="🔔" />
                    <IconButton icon="👤" className="bg-violet-600 text-white hover:bg-violet-500" />
                </div>
            </div>
        </header>
    )
}

export default Navbar