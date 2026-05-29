import Logo from "../../branding/Logo"
import IconButton from "../../ui/buttons/IconButton"
import Navigation from "./Navigation"
import AuthActions from "../../auth/AuthActions"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0B0B17]/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">

                <Logo />

                <Navigation />

                <div className="flex items-center gap-2">
                    <IconButton icon="🔍" />
                    <IconButton icon="🔔" />
                    <AuthActions />
                </div>

            </div>
        </header>
    )
}

export default Navbar